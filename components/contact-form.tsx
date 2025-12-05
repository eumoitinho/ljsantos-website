// components/ContactForm.tsx ou onde quer que seu componente esteja localizado
"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/lib/i18n";

interface ContactFormProps {
  isWhatsApp?: boolean;
  onSuccess?: () => void;
  sourcePage?: string; // Página específica onde o form está (opcional)
  sourceType?: string; // Tipo do formulário (e.g., 'contact-form', 'newsletter')
  product?: string; // Produto específico relacionado ao form (opcional)
  // Removi 'source' pois não estava sendo usado no código original,
  // mas pode ser adicionado se necessário para outra lógica.
}

export default function ContactForm({
  isWhatsApp = false,
  onSuccess,
  sourcePage,
  sourceType = "contact-form", // Default value
  product,
}: ContactFormProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [referrer, setReferrer] = useState("");
  const [userAgent, setUserAgent] = useState("");
  const [deviceType, setDeviceType] = useState("desktop");
  const [domain, setDomain] = useState("");
  const [currentUrl, setCurrentUrl] = useState(""); // State para guardar a URL completa

  // Get client-side information safely
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get current path if not provided via props
      if (!sourcePage) {
        setCurrentPath(window.location.pathname);
      }
      setCurrentUrl(window.location.href); // Armazena a URL completa
      setReferrer(document.referrer); // Referrer
      const ua = navigator.userAgent;
      setUserAgent(ua); // User Agent
      setDeviceType(/Mobile|Android|iP(hone|od)|IEMobile/.test(ua) ? "smartphone" : "desktop"); // Device Type
      setDomain(window.location.hostname); // Domain
    }
  }, [sourcePage]); // Dependência apenas em sourcePage

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const searchParams = new URLSearchParams(window.location.search); // Pega os parâmetros da URL atual

    // Informações básicas e de rastreio inicial
    const actualSourcePage = sourcePage || currentPath || "/";
    formData.append("sourcePage", actualSourcePage);
    formData.append("sourceType", sourceType);
    formData.append("referrer", referrer); // Referrer original
    formData.append("userAgent", userAgent);
    formData.append("deviceType", deviceType);
    formData.append("conversionUrl", currentUrl); // URL completa da conversão
    formData.append("domain", domain);
    if (product) {
      formData.append("product", product);
    }

    // --- Lógica de Parsing UTM e Definição de Traffic Source ---
    let determinedTrafficSource = "Direct"; // Default
    const utmSource = searchParams.get("utm_source");
    const utmMedium = searchParams.get("utm_medium");
    const utmCampaign = searchParams.get("utm_campaign");
    const utmTerm = searchParams.get("utm_term");
    const utmContent = searchParams.get("utm_content");
    const gclid = searchParams.get("gclid"); // Google Click ID
    const fbclid = searchParams.get("fbclid"); // Facebook Click ID

    // Prioriza UTM Source, depois Click IDs, depois Referrer
    if (utmSource) {
        determinedTrafficSource = utmSource;
    } else if (gclid) {
        determinedTrafficSource = "google"; // Ou pode ser mais específico como "google / cpc"
    } else if (fbclid) {
        determinedTrafficSource = "facebook"; // Ou pode ser mais específico como "facebook / cpc"
    } else if (referrer) {
      try {
        const referrerUrl = new URL(referrer);
        const referrerHostname = referrerUrl.hostname;
        // Usa o referrer apenas se não houver UTMs ou Click IDs
        if (referrerHostname.includes("google")) {
          determinedTrafficSource = "google"; // RD pode diferenciar organic/paid depois
        } else if (referrerHostname.includes("facebook") || referrerHostname.includes("fb")) {
          determinedTrafficSource = "facebook";
        } else if (referrerHostname.includes("instagram")) {
          determinedTrafficSource = "instagram";
        } else if (referrerHostname.includes("linkedin")) {
            determinedTrafficSource = "linkedin";
        } else if (referrerHostname !== window.location.hostname) {
          // Captura outros referrers externos
          determinedTrafficSource = referrerHostname; // Ou classificar como 'Referral'
        }
      } catch (err) {
        console.error("Erro ao analisar referrer:", err);
        // Mantém "Direto" ou outra lógica de fallback
      }
    }

    // Adiciona os parâmetros UTM e o trafficSource determinado ao FormData
    formData.append("trafficSource", determinedTrafficSource);
    if (utmMedium) formData.append("utm_medium", utmMedium);
    if (utmCampaign) formData.append("utm_campaign", utmCampaign);
    if (utmTerm) formData.append("utm_term", utmTerm);
    if (utmContent) formData.append("utm_content", utmContent);
    if (gclid) formData.append("gclid", gclid);
    if (fbclid) formData.append("fbclid", fbclid);
    // --- Fim da Lógica UTM ---

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        if (onSuccess) {
          onSuccess();
        } else {
          router.push("/obrigado"); // Página de agradecimento padrão
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Error sending form to API:", response.statusText, errorData);
        alert(t('errors.formSubmitError') || `An error (${response.status}) occurred while submitting the form. Please try again.`);
      }
    } catch (error) {
      console.error("Network or fetch error when submitting form:", error);
      alert(t('errors.connectionError') || "A connection error occurred while submitting the form. Please check your internet and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Renderiza o formulário
  return (
    <form name="solicite-orcamento" onSubmit={handleSubmit} className="space-y-4 animate-fadeInUp">
      {/* Campo Nome */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.name')}</label>
        <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#435a52] focus:border-[#435a52]" />
      </div>

      {/* Campo Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.email')}</label>
        <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#435a52] focus:border-[#435a52]" />
      </div>

      {/* Campo Telefone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.phone')}</label>
        <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#435a52] focus:border-[#435a52]" />
      </div>

      {/* Campo Estado */}
      <div>
        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.state') || 'State'}</label>
        <input type="text" id="state" name="state" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#435a52] focus:border-[#435a52]" />
      </div>

      {/* Campo Cidade */}
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.city') || 'City'}</label>
        <input type="text" id="city" name="city" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#435a52] focus:border-[#435a52]" />
      </div>

      {/* Campo Empresa (Opcional) */}
       <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.company')}</label>
        <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#435a52] focus:border-[#435a52]" />
      </div>

      {/* Campo Mensagem (Condicional) */}
      {!isWhatsApp && (
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.message')}</label>
          <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#435a52] focus:border-[#435a52]"></textarea>
        </div>
      )}

      {/* Campos Ocultos: Alguns são preenchidos dinamicamente no handleSubmit,
          manter aqui pode ser útil para referência ou se usados em outra lógica.
          Os valores UTM são adicionados dinamicamente e não precisam de input hidden. */}
      <input type="hidden" name="sourcePageValue" value={sourcePage || currentPath || "/"} />
      <input type="hidden" name="sourceTypeValue" value={sourceType} />
      {/* <input type="hidden" name="referrerValue" value={referrer} /> */}
      {/* <input type="hidden" name="userAgentValue" value={userAgent} /> */}
      {/* <input type="hidden" name="deviceTypeValue" value={deviceType} /> */}
      <input type="hidden" name="conversionUrlValue" value={currentUrl} />
      <input type="hidden" name="domainValue" value={domain} />
      {product && <input type="hidden" name="productValue" value={product} />}

      {/* Botão de Envio */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#435a52] text-white py-3 px-6 rounded-md hover:bg-[#364a43] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t('contact.form.sending') : isWhatsApp ? t('contact.form.startChat') || 'Start conversation' : t('contact.form.submit')}
      </button>
    </form>
  );
}