export interface ITask {
  title: string
  description: string
}

export interface IStatusContainer {
  title: string
  tasks: ITask[]
}
