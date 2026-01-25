import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Task'

import { removeTask, editTask } from '../../store/reducers/tasks'

type TaskProps = {
  title: string
  priority: enums.Priority
  Status: enums.Status
  description: string
  id: number
}

const Task = ({
  title,
  priority,
  Status,
  description: originalDescription,
  id
}: TaskProps) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription)
    }
  }, [originalDescription])

  function cancelEditing() {
    setIsEditing(false)
    setDescription(originalDescription) // para voltar ao texto original
  }

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag param="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag param="status" status={Status}>
        {Status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(event) => setDescription(event.target.value)} // para atualizar a descrição enquanto edita
        placeholder="Task description..."
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(
                  editTask({
                    Title: title,
                    Status,
                    Priority: priority,
                    Description: description,
                    Id: id
                  })
                )
                setIsEditing(false)
              }}
            >
              Save
            </S.SaveButton>
            <S.RemoveButton onClick={cancelEditing}>Exit</S.RemoveButton>
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
