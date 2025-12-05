// types/rd-station.d.ts
interface RDStationPayload {
  event_type: string
  event_family: string
  payload: {
    conversion_identifier: string
    name: string
    email: string
    personal_phone?: string
    company_name?: string
    cf_message?: string
    cf_product_interest?: string
    cf_source: string
    legal_bases: Array<{
      category: string
      type: string
      status: string
    }>
  }
}
