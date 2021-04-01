import { configureStore, Reducer } from '@reduxjs/toolkit'
import createSagaMiddleware, { Saga } from 'redux-saga'
import { all, fork } from 'redux-saga/effects';

import * as counter from './modules/counter/store'
import * as github from './modules/GitHub/store'

interface Slice {
  name: string
  reducer?: Reducer
  saga?: Saga
}

const slices: Slice[] = [
  counter,
  github,
]

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: slices.reduce((acc, { name, reducer }) => !reducer ? acc : { ...acc, [name]: reducer }, {}),
  middleware: [sagaMiddleware],
})

function* rootSaga () {
  yield all(slices.map(({ saga }) => saga).filter(Boolean).map(saga => fork(saga)))
}

sagaMiddleware.run(rootSaga)

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
