export interface ITask {
  id: number
  title: string
  description: string
}

export interface ITaskUpdates {
  title?: string
  description?: string
}

export interface IStatusContainerStarter {
  order: number
  title: string
  color: string
}

export interface IStatusContainerSupabase extends IStatusContainerStarter {
  id: string
  userId: string
  created_at: string
}

export interface IStatusContainer extends IStatusContainerSupabase {
  tasks: ITask[]
}

export interface IStatusContainerUpdates {
  title?: string
  color?: string
}

export interface ITasksStore {
  statusContainers: IStatusContainer[]
  addTask: (containerIndex: number, task: ITask) => void
  updateTask: (taskId: number, updates: ITaskUpdates) => void
  removeTask: (taskId: number) => void
}
