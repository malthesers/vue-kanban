export interface ITask {
  id: number
  title: string
  description: string
}

export interface IStatusContainer {
  title: string
  color: string
  tasks: ITask[]
}
