import axios from 'axios'
const API_URL = `https://64ae1c60b470006a5ec6a189.mockapi.io`

export const request = async ({ url, method, data = {} }) => {
  const response = await axios[method](`${API_URL}/${url}`, data)
  return response.data
}
