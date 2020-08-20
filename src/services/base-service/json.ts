import Services from '@/services'
const { http } = Services

export async function getJson(params: any) {
  const result = await http.get('/api/v1/json', params)
  return http.getResult(result)
}
