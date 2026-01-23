import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Task'

import { removeTask } from '../../store/reducers/tasks'

type TaskProps = {
  title: string
  priority: enums.Priority
  Status: enums.Status
  description: string
  id: number
}

const Task = ({ title, priority, Status, description, id }: TaskProps) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag param="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag param="status" status={Status}>
        {Status}
      </S.Tag>
      <S.Description value={description} placeholder="Task description..." />
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.SaveButton>Save</S.SaveButton>
            <S.RemoveButton onClick={() => setIsEditing(false)}>
              Exit
            </S.RemoveButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Edit</S.Button>
            <S.RemoveButton onClick={() => dispatch(removeTask(id))}>
              Delete
            </S.RemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
