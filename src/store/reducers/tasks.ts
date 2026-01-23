import { createSlice, PayloadAction } from '@reduxjs/toolkit' // PayloadAction é um tipo genérico fornecido pelo Redux Toolkit que representa a ação com um payload tipado //* payload é a carga útil da ação, ou seja, os dados que estão sendo enviados com a ação
import Task from '../../models/Task' // Importa o modelo Task para tipar o estado inicial e as ações relacionadas às tarefas
import * as enums from '../../utils/enums/Task' // Importa os enums para definir os estados e prioridades das tarefas

type TaskState = {
  itens: Task[] // Define que o estado das tarefas é um array de objetos do tipo Task
}

const initialState: TaskState = {
  itens: [
    {
      Title: 'Take out the trash',
      Description: '...',
      Priority: enums.Priority.IMPORTANT,
      Status: enums.Status.DONE,
      Id: 1
    },
    {
      Title: 'Clean the house',
      Description: 'Especialy the kitchen (dishes)',
      Priority: enums.Priority.URGENT,
      Status: enums.Status.DONE,
      Id: 2
    },
    {
      Title: 'Do the dishes',
      Description: '...',
      Priority: enums.Priority.IMPORTANT,
      Status: enums.Status.PENDING,
      Id: 3
    }
  ]
}

// Cria um slice para gerenciar o estado das tarefas

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState, // ou também só:   initialState
  reducers: {
    removeTask: (state, action: PayloadAction<number>) => {
      // faz com que o estado atual seja filtrado, removendo a tarefa cujo id corresponde ao valor fornecido no payload da ação
      state.itens = state.itens.filter((task) => task.Id !== action.payload)
      return state
    }
  }
})

export const { removeTask } = tasksSlice.actions

export default tasksSlice.reducer
