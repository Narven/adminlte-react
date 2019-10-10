import IClient from './IClient'
import IManager from './IManager'

interface IState {
  clients: IClient[],
  managers: IManager[]
}

export default IState
