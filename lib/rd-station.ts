// app/lib/rd-station.ts
// Tipo atualizado para incluir campos UTM e Click IDs
export type ContactFormData  = {
  name: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  company?: string;
  message?: string;
  product?: string;
  sourcePage: string;
  sourceType: string;
  referrer?: string;
  userAgent?: string;
  deviceType?: string;
  conversionUrl?: string;
  trafficSource?: string; // Fonte de tráfego principal (utm_source, referrer, etc.)
  domain?: string;
  // Campos UTM e Click IDs adicionados
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
};

export async function sendToRDStation(data: ContactFormData | FormData) {
  const apiKey = process.env.RD_STATION_API_KEY;

  if (!apiKey) {
    console.error("RD Station API key (RD_STATION_API_KEY) não está definida nas variáveis de ambiente.");
    throw new Error("RD Station API key is not defined");
  }

  let formData: ContactFormData;

  // Converte FormData para objeto se necessário (atualizado para incluir novos campos)
  if (data instanceof FormData) {
    // Certifique-se que a conversão pega todos os campos necessários
    formData = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      phone: data.get("phone") as string,
      state: data.get("state") as string,
      city: data.get("city") as string,
      company: data.get("company") as string || "",
      message: data.get("message") as string || "",
      product: data.get("product") as string || "",
      sourcePage: (data.get("sourcePage") as string) || "/",
      sourceType: (data.get("sourceType") as string) || "contact-form",
      referrer: (data.get("referrer") as string) || "",
      userAgent: (data.get("userAgent") as string) || "",
      deviceType: (data.get("deviceType") as string) || "desktop",
      conversionUrl: (data.get("conversionUrl") as string) || "",
      trafficSource: (data.get("trafficSource") as string) || "Direto",
      domain: (data.get("domain") as string) || "",
      // Extrai os campos UTM e Click IDs
      utm_medium: data.get("utm_medium") as string || "",
      utm_campaign: data.get("utm_campaign") as string || "",
      utm_term: data.get("utm_term") as string || "",
      utm_content: data.get("utm_content") as string || "",
      gclid: data.get("gclid") as string || "",
      fbclid: data.get("fbclid") as string || "",
    };
  } else {
    formData = data; // Assume que já é um objeto ContactFormData
  }

  // Cria um identificador de conversão descritivo
  const conversionIdentifier = `${formData.sourceType}:${formData.sourcePage.replace(/^\/+|\/+$/g, "") || "home"}`;

  // Monta o payload para a API do RD Station (v4 - Events API)
  const payload = {
    event_type: "CONVERSION",
    event_family: "CDP",
    payload: {
      conversion_identifier: conversionIdentifier,
      name: formData.name,
      email: formData.email,
      personal_phone: formData.phone, // Campo padrão do RD para telefone

      // --- Mapeamento para Campos Padrão de Tráfego do RD Station ---
      // Verifique a documentação da API /platform/conversions para confirmar os nomes exatos!
      traffic_source: formData.trafficSource || "Direto", // Fonte (utm_source ou calculado)
      traffic_medium: formData.utm_medium || undefined, // utm_medium
      traffic_campaign: formData.utm_campaign || undefined, // utm_campaign
      traffic_value: formData.utm_term || undefined, // utm_term (frequentemente mapeado para 'value' ou 'term')
      traffic_content: formData.utm_content || undefined, // utm_content
      // Envia Click IDs se presentes
      ...(formData.gclid && { google_click_id: formData.gclid }),
      ...(formData.fbclid && { facebook_click_id: formData.fbclid }),
      // Se não houver um campo padrão específico para utm_term, pode enviar como custom field:
      // cf_utm_term: formData.utm_term || undefined,

      // --- Mapeamento para Campos Personalizados (Custom Fields - cf_) ---
      cf_estado: formData.state,
      cf_cidade: formData.city,
      cf_empresa: formData.company || "",
      cf_mensagem: formData.message || "",
      cf_produto: formData.product || "",
      // cf_origem: formData.trafficSource || "Direto", // Pode remover se usar traffic_source padrão
      cf_tipo_formulario: formData.sourceType || "contact-form",
      cf_pagina: formData.sourcePage || "/",
      cf_url_conversao: formData.conversionUrl || "", // Envia a URL completa onde ocorreu a conversão
      cf_dominio: formData.domain || "",
      cf_user_agent: formData.userAgent || "",
      cf_dispositivo: formData.deviceType || "desktop",
      cf_referrer: formData.referrer || "", // Referrer original pode ser útil

      internal_source: "12", // Mantenha se for específico da sua integração
      legal_bases: [
        {
          category: "communications",
          type: "consent",
          status: "granted",
        },
      ],
    },
  };

  // Remove chaves com valor undefined do payload.payload para evitar enviar campos vazios desnecessários
  Object.keys(payload.payload).forEach(key => {
    if (payload.payload[key as keyof typeof payload.payload] === undefined || payload.payload[key as keyof typeof payload.payload] === "") {
      delete payload.payload[key as keyof typeof payload.payload];
    }
  });


  try {
    console.log("Enviando para RD Station:", JSON.stringify(payload, null, 2)); // Log do payload
    const response = await fetch(`https://api.rd.services/platform/conversions?api_key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", // Adicionado Accept header
      },
      body: JSON.stringify(payload),
    });

    // Analisa a resposta
    const responseData = await response.json().catch(() => null); // Tenta parsear JSON mesmo em erro

    if (!response.ok) {
      console.error("Erro da API RD Station:", response.status, response.statusText, responseData);
      throw new Error(`RD Station API error (${response.status}): ${JSON.stringify(responseData || response.statusText)}`);
    }

    console.log("Resposta RD Station:", responseData);
    // A API v4 retorna um objeto diferente, pode não ter 'conversion_id' diretamente aqui.
    // O sucesso é indicado pela resposta 200 OK. O evento pode ser visto na lead no RD.
    // Exemplo de retorno sucesso (200 OK): { "event_uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" }
    return {
      success: true,
      // Adapte conforme a resposta real da API v4 /platform/conversions
      rdResponse: responseData,
      eventUuid: responseData?.event_uuid, // Exemplo
    };
  } catch (error) {
    console.error("Erro ao enviar dados para RD Station:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro desconhecido ao enviar para RD Station",
    };
  }
}