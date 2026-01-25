import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Task'

// ============================================================= types:

type FilterState = {
  searchTerm: string
  criteria: 'Priority' | 'Status' | 'All'
  value?: enums.Priority | enums.Status
}

// ============================================================= initial state, slices:

const initialState: FilterState = {
  searchTerm: '',
  criteria: 'All'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      // Atualiza o termo de busca no estado do filtro
      state.searchTerm = action.payload // Define o termo de busca com o valor fornecido no payload da ação
    }
  }
})

// ============================================================= exports:

export const { setSearchTerm } = filterSlice.actions
export default filterSlice.reducer
