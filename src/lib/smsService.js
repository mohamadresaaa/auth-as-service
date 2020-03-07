const axios = require("axios")

const http = axios.create({
  baseURL: "https://api.ghasedak.io/v2/",
  headers: {
    apikey: "f6f669027aae3ee4b304b81ab6dce560ba60bbb7a866d2f905bf92aa0a0078e2"
  }
})

module.exports = async (url, method, body) => {
  return http[method](url, body)
    .then(res => res.data.items)
    .catch(error => error)
}
