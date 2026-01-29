import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Task'

import { removeTask, editTask, changeStatus } from '../../store/reducers/tasks'
import { Button, SaveButton } from '../../styles'

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

  function changeTaskStatus(e: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeStatus({
        Id: id,
        Done: e.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={Status === enums.Status.DONE}
          onChange={changeTaskStatus}
        />{' '}
        {/* Status === enums.Status.DONE vai estar marcado quando estiver como Stutus = Done */}
        <S.Title>
          {isEditing && <em>Editing: </em>}
          {/* se for True mostra texto, basicamente*/}
          {title}
        </S.Title>
      </label>
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
            <SaveButton
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
            </SaveButton>
            <S.RemoveButton onClick={cancelEditing}>Exit</S.RemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
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
