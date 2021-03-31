import { createAction, createSlice, SliceCaseReducers } from "@reduxjs/toolkit"

const incrementAction = createAction<void, 'increment'>('increment')
const decrementAction = createAction<void, 'decrement'>('decrement')

export interface CounterStore {
  value: number
}

interface CounterActions extends SliceCaseReducers<CounterStore> {
  increment: (state: CounterStore) => void
  decrement: (state: CounterStore) => void
}

export const { name, actions, reducer } = createSlice<CounterStore, CounterActions, 'counter'>({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    [incrementAction.type]: state => {
      state.value += 1
    },
    [decrementAction.type]: state => {
      state.value -= 1
    }
  }
})
