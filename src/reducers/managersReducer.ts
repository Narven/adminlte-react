import { MANAGER_FETCH } from "../constants"

interface IAction {
  type: string,
  payload?: any
}

export default (state: [] =  [], action: IAction) => {
  switch(action.type) {
    case MANAGER_FETCH:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}
