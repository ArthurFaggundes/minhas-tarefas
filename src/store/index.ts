import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/tasks' // Importa o reducer de tarefas para ser incluído na configuração da store

const store = configureStore({
  reducer: {
    tasks: tasksReducer // Adiciona o reducer de tarefas à store sob a chave 'tasks'
  }
})

export type RootReducer = ReturnType<typeof store.getState> // exportar o tipo da raiz do estado //* RootReducer é o tipo do estado global da aplicação //** ReturnType é um utilitário do TypeScript que extrai o tipo de retorno de uma função //*** typeof store.getState obtém o tipo da função getState do store
export default store
