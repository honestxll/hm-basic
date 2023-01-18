import ls from './localstorage'

const TOKEN_KEY = 'token'

export function isLogin() {
  return !!ls.get(TOKEN_KEY)
}

export function getToken() {
  return ls.get(TOKEN_KEY)
}

export function setToken(token: string) {
  ls.set(TOKEN_KEY, token)
}

export function removeToken() {
  ls.remove(TOKEN_KEY)
}
