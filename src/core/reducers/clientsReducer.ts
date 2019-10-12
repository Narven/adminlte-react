import { CLIENTS_FETCH } from '../../constants'

interface IAction {
  type: string,
  payload?: any
}

export default (state: [] = [], action: IAction) => {
  switch(action.type) {
    case CLIENTS_FETCH:
      return action.payload
    default:
      return state
  }
}
