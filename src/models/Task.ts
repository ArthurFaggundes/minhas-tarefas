import * as enums from '../utils/enums/Task'

class Task {
  Title: string
  Description: string
  Priority: enums.Priority
  Status: enums.Status
  Id: number

  constructor(
    title: string,
    description: string,
    priority: enums.Priority,
    status: enums.Status,
    id: number
  ) {
    this.Title = title
    this.Description = description
    this.Priority = priority
    this.Status = status
    this.Id = id
  }
}
export default Task
