import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(request => request.data)
}

const create = (newObject) => {
//   return axios.post(baseUrl, newObject)
    const request = axios.post(baseUrl, newObject)
    return request.then(request => request.data)
}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(request => request.data)
}

const replace =(id, personObject) => {
  const request = axios.put(`${baseUrl}/${id}`, personObject)
  return request.then(request => request.data)
}

export default { 
  getAll, 
  create,
  remove,
  replace
}