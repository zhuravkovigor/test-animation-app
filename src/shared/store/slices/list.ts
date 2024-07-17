import { createSlice } from '@reduxjs/toolkit/react'
import { IList } from '../../models/list'
import { generateColor } from '../../utils/generate'

interface ListState {
  items: IList[]
}

const initialState: ListState = {
  items: [],
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addList(state) {
      state.items.unshift({
        color: generateColor(),
      })
    },

    removeList(state) {
      if (state.items?.length === 0) return

      state.items.pop()
    },
  },
})

export const { addList, removeList } = listSlice.actions
