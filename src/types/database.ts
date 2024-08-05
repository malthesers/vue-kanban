import type { IStatusContainer, ITask } from '.'

export interface Database {
  containers: IStatusContainer[]
  tasks: ITask[]
}
