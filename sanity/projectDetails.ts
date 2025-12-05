// Centraliza identificação do projeto Sanity para uso tanto no Studio hospedado quanto no Next.
export const projectId = 'o7mc56uo'
export const dataset = 'production'
export const apiVersion = '2024-09-01'

// Caso queira alternar dinamicamente via env em build Next somente (não no Studio hosted):
// export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o7mc56uo'
// export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
// export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-09-01'
