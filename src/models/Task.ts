import * as enums from '../utils/enums/Task'

class Task {
  Title: string
  Description: string
  Priority: enums.Priority
  State: enums.Status
  Id: number

  constructor(
    title: string,
    description: string,
    priority: enums.Priority,
    state: enums.Status,
    id: number
  ) {
    this.Title = title
    this.Description = description
    this.Priority = priority
    this.State = state
    this.Id = id
  }
}
export default Task
