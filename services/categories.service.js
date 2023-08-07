import { request } from './generic.service'

const getCategories = () => request({ url: `categories`, method: 'get' })

export { getCategories }
