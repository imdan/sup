const axios = require("axios")
// const listUrl = "http://localhost:3000/api/settings"
const listUrl = "https://sup-cool.herokuapp.com/api/settings/"

export const updateSettings = async (settings, token) => {
  const config = {
    headers: { Authorization: `bearer ${token}` },
  }
  const updatedSettings = await axios.put(listUrl, settings, config)

  return updatedSettings
}
