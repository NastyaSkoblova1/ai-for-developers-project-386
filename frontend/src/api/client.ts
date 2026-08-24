import { client } from '@/generated/client.gen'

const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

client.setConfig({
  baseUrl,
})

export { client as apiClient }
