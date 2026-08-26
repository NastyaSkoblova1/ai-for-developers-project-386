import { client } from '@/generated/client.gen'

const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api'

client.setConfig({
  baseUrl,
})

export { client as apiClient }
