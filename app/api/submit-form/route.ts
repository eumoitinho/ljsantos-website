// app/api/submit-form/route.ts
import { NextResponse } from "next/server";
import { sendToRDStation } from "@/lib/rd-station";
import type { ContactFormData } from "@/lib/rd-station"; // Importa o tipo atualizado

export async function POST(request: Request) {
  try {
    const formData = await request.formData(); // Pega o FormData da requisição

    // Headers podem ser usados como fallback ou para log, mas priorize dados do form
    const headers = request.headers;
    const userAgentHeader = headers.get('user-agent') || '';
    const referrerHeader = headers.get('referer') || '';
    const host = headers.get('host') || '';

    // Determina User Agent e Device Type priorizando dados do form
    const userAgentFromForm = formData.get("userAgent") as string;
    const deviceTypeFromForm = formData.get("deviceType") as string;

    const finalUserAgent = userAgentFromForm || userAgentHeader;
    let finalDeviceType = deviceTypeFromForm;
    if (!finalDeviceType) {
        const isMobile = /Mobile|Android|iP(hone|od)|IEMobile/.test(finalUserAgent);
        finalDeviceType = isMobile ? 'smartphone' : 'desktop';
    }

    // Monta o objeto de dados usando o tipo ContactFormData e priorizando o FormData
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      state: formData.get("state") as string,
      city: formData.get("city") as string,
      company: (formData.get("company") as string) || undefined, // Usa undefined se vazio
      message: (formData.get("message") as string) || undefined, // Usa undefined se vazio
      product: (formData.get("product") as string) || undefined, // Usa undefined se vazio
      sourcePage: (formData.get("sourcePage") as string) || "/",
      sourceType: (formData.get("sourceType") as string) || "contact-form",
      referrer: (formData.get("referrer") as string) || referrerHeader || undefined,
      userAgent: finalUserAgent,
      deviceType: finalDeviceType,
      conversionUrl: (formData.get("conversionUrl") as string) || undefined,
      trafficSource: (formData.get("trafficSource") as string) || "Direto", // Fonte calculada no client
      domain: (formData.get("domain") as string) || host,
      // Extrai os campos UTM e Click IDs do FormData
      utm_medium: (formData.get("utm_medium") as string) || undefined,
      utm_campaign: (formData.get("utm_campaign") as string) || undefined,
      utm_term: (formData.get("utm_term") as string) || undefined,
      utm_content: (formData.get("utm_content") as string) || undefined,
      gclid: (formData.get("gclid") as string) || undefined,
      fbclid: (formData.get("fbclid") as string) || undefined,
    };

     // Validação básica de campos obrigatórios no servidor (opcional, mas recomendado)
     if (!data.name || !data.email || !data.phone || !data.state || !data.city) {
        console.error("Validation error: Required fields missing.", { name: data.name, email: data.email /* etc */ });
        return NextResponse.json(
            { success: false, error: "Required fields not filled." },
            { status: 400 } // Bad Request
        );
     }


    // Envia os dados para a função da biblioteca RD Station
    const result = await sendToRDStation(data);

    if (!result.success) {
      // O erro já foi logado dentro de sendToRDStation
      throw new Error(result.error || "Falha ao enviar para RD Station");
    }

    // Retorna sucesso para o cliente
    return NextResponse.json({
      success: true,
      // Pode retornar algum ID ou confirmação do RD Station se disponível e útil
      eventUuid: result.eventUuid, // Exemplo baseado no retorno da API v4
      rdResponse: result.rdResponse, // Resposta completa do RD para debug, se necessário
    });

  } catch (error) {
    console.error("Erro ao processar submissão do formulário:", error);
    return NextResponse.json(
      {
        success: false,
        // Retorna a mensagem de erro específica ou uma genérica
        error: error instanceof Error ? error.message : "Erro desconhecido no servidor",
      },
      { status: 500 } // Internal Server Error
    );
  }
}