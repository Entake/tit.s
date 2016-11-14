// Our modules
import * as ActionTypes from './actionTypes'

export const registerAction = payload => ({
  type: ActionTypes.DO_REGISTER,
  payload
})

export const redirectedToLoginAction = () => ({
  type: ActionTypes.REDIRECTED_TO_LOGIN
})

export const loginAction = payload => ({
  type: ActionTypes.DO_LOGIN,
  payload
})

export const uploadAction = (payload, token) => {
  return {
    type: ActionTypes.DO_UPLOAD,
    token: token,
    payload
  }
}
