import _ from 'lodash'
import { CLIENTS_FETCH, MANAGER_FETCH } from "../constants"
import ApiService from '../services/ApiService'

// ********* ACTION CREATORS ***********
type Fn = Function

export const fetchClientsAndManagers = () => async (dispatch: Fn, getState: Fn) => {
  await dispatch(fetchClients())

  _.chain(getState().clients)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchManager(id)))
    .value()
}

export const fetchClients = () => {
  return async (dispatch: Function, _getState: Function) => {
    const response = await ApiService.get('/posts');
    dispatch({
      type: CLIENTS_FETCH,
      payload: response.data
    })
  }
}

export const fetchManager = (id: number) => {
  return async (dispatch: Function, _getState: Function) => {
    const response = await ApiService.get(`/posts/${id}`)
    dispatch({
      type: MANAGER_FETCH,
      payload: response.data
    })
  }
}
