import api from './api'

function setAuthHeader (token) {
  api.defaults.headers.common.authorization = token
}

export default setAuthHeader
