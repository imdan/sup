const axios = require("axios")
const baseUrl = "https://sup-cool.herokuapp.com/api/projects"

const sup = async () => {
  const response = await axios.get("https://sup-cool.herokuapp.com/")
  return response.data
}

let token = null
let projectToSend = {}

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const setProject = project => {
  projectToSend = project
  // console.log(projectToSend)
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async () => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, projectToSend, config)
  // console.log(response.data.data)
  return response.data.data
}

const update = async () => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.put(
    `${baseUrl}/${projectToSend.id}`,
    projectToSend,
    config
  )

  // console.log(response.data)
  return response.data
}

const remove = async blogId => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete(`${baseUrl}/${blogId}`, config)

  return response.data
}

export default { sup, getAll, create, update, remove, setToken, setProject }
