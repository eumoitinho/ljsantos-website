// app/actions/form-actions.ts
"use server"

import { sendToRDStation } from "../../lib/rd-station"

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
  product?: string
  source?: string
  referrerUrl?: string
  pageUrl?: string
  trafficSource?: string
  conversionUrl?: string
  conversionIdentifier?: string
}

export async function submitForm(formData: FormData) {
  try {
    // Validate required fields
    if (!formData.email || !formData.name || !formData.phone) {
      throw new Error("Name, email and phone are required")
    }

    let trafficSource = "Direct"
    if (formData.referrerUrl) {
      try {
        const referrer = new URL(formData.referrerUrl)
        if (referrer.hostname.includes("google")) {
          trafficSource = "Organic Search | Google"
          if (referrer.search.includes("gclid")) {
            trafficSource = "Paid Search | Google"
          }
        } else if (referrer.hostname.includes("facebook") || referrer.hostname.includes("fb")) {
          trafficSource = "Facebook"
        } else if (referrer.hostname.includes("instagram")) {
          trafficSource = "Instagram"
        } else {
          trafficSource = `Referral: ${referrer.hostname}`
        }
      } catch (err) {
        // If referrerUrl is not a valid URL, keep trafficSource as "Direct"
      }
    }
    // Send to RD Station
    const rdResponse = await sendToRDStation({
      ...formData,
      trafficSource: trafficSource,
      conversionUrl: formData.conversionUrl || formData.pageUrl,
      conversionIdentifier: `Converted on ${formData.source} - ${formData.pageUrl}`,
    } as any)

    if (!rdResponse.success) {
      console.error("Error sending to RD Station:", rdResponse.error)
      throw new Error(rdResponse.error || "Failed to send data to RD Station")
    }

    return { success: true }
  } catch (error) {
    console.error("Error submitting form:", error)
    throw new Error(error instanceof Error ? error.message : "Failed to submit form. Please try again later.")
  }
}
