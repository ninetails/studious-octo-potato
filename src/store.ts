import { configureStore } from '@reduxjs/toolkit'
import * as counter from './modules/counter/store'

const slices = [
  counter
]

const store = configureStore({
  reducer: slices.reduce((acc, {name, reducer}) => ({ ...acc, [name]: reducer }), {})
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
