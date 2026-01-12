import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'

type TaskProps = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
}

const Task = ({ title, priority, status, description }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag param="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag param="status" status={status}>
        {status}
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
            <S.RemoveButton>Delete</S.RemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
