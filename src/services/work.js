const axios = require("axios")
const baseUrl = "https://api.github.com/users/imdan"
// const listUrl = "http://localhost:3000/api/project-list"
const listUrl = "https://sup-cool.herokuapp.com/api/project-list"
const repoUrl = `${baseUrl}/repos`

const getMe = async () => {
  const me = await axios.get(baseUrl)
  return me.data
}

const getAll = async () => {
  const work = await axios.get(repoUrl)
  return {
    work,
  }
}

const getList = async () => {
  const list = await axios.get(listUrl)
  const current = list.data.projectList.list
  return current
}

const getWork = async () => {
  const work = await axios.get(repoUrl)
  const projects = await filterProjects(work.data)

  return {
    projects,
  }
}

const updateProjectList = async (list, token) => {
  // send data to backend
  const config = {
    headers: { Authorization: `bearer ${token}` },
  }

  const listId = "608d97069331dcf739b8a120"

  await axios.put(`${listUrl}/${listId}`, list, config)
}

const filterProjects = async work => {
  const current = await axios.get(listUrl)
  // console.log(current)
  const toInclude = current.data.projectList.list
  const projects = work.filter(w => {
    return toInclude.includes(w.name)
  })

  return projects
}

export default { getMe, getAll, getWork, getList, updateProjectList }
