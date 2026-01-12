import { createSlice, PayloadAction } from '@reduxjs/toolkit' // PayloadAction é um tipo genérico fornecido pelo Redux Toolkit que representa a ação com um payload tipado //* payload é a carga útil da ação, ou seja, os dados que estão sendo enviados com a ação
import Task from '../../models/Task' // Importa o modelo Task para tipar o estado inicial e as ações relacionadas às tarefas
import * as enums from '../../utils/enums/Task' // Importa os enums para definir os estados e prioridades das tarefas

// Cria um slice para gerenciar o estado das tarefas

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Do the dishes',
      '...',
      enums.Priority.NORMAL,
      enums.Status.PENDING,
      1
    ),
    new Task(
      'Clean the house',
      'Especialy the kitchen (dishes)',
      enums.Priority.URGENT,
      enums.Status.DONE,
      2
    ),
    new Task(
      'Take out the trash',
      '...',
      enums.Priority.IMPORTANT,
      enums.Status.DONE,
      3
    )
  ],
  reducers: {
    removeTask: (state, action: PayloadAction<number>) => {
      // faz com que o estado atual seja filtrado, removendo a tarefa cujo id corresponde ao valor fornecido no payload da ação
      state = state.filter((task) => task.Id !== action.payload)
      return state
    }
  }
})

export const { removeTask } = tasksSlice.actions

export default tasksSlice.reducer
