import { useEffect } from "react"
import { createAction, createSlice, SliceCaseReducers } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { call, put, takeEvery } from "redux-saga/effects"

const userFetchRequestedAction = createAction<void, 'userFetchRequested'>('userFetchRequested')
const userFetchSucceededAction = createAction<void, 'userFetchSucceeded'>('userFetchSucceeded')
const userFetchFailedAction = createAction<void, 'userFetchFailed'>('userFetchFailed')

interface GitHubUser {}

export interface GitHubStore {
  code?: string
  user?: GitHubUser
  error?: Error
}

interface GitHubActions extends SliceCaseReducers<GitHubStore> {
  userFetchSucceeded: (state: GitHubStore, action: any) => void
  userFetchFailed: (state: GitHubStore, action: any) => void
}

export const { name, actions, reducer } = createSlice<GitHubStore, GitHubActions, 'github'>({
  name: 'github',
  initialState: {},
  reducers: {
    [userFetchSucceededAction.type]: (state: GitHubStore, action) => {
      console.log('userFetchSucceededAction', action)
    },
    [userFetchFailedAction.type]: (state: GitHubStore, { payload }) => {
      state.error = payload.error
    },
  }
})

async function doFetchUser () {
  const res = await fetch('https://api.github.com/user', {
    mode: 'no-cors',
    cache: 'no-cache',
    headers: {
      Accept: 'application/vnd.github.v3+json'
    }
  })

  return res.json()
}

function* fetchUser() {
  try {
    const user = yield call(doFetchUser)
    yield put(actions.userFetchSucceeded(user))
  } catch (error) {
    yield put(actions.userFetchFailed({ error }))
  }
}

export function* saga () {
  yield takeEvery(userFetchRequestedAction.type, fetchUser)
}

export const useUserSelector = () => useSelector<{ [name]: GitHubStore }>(({ [name]: { user } }) => user)

export const useDispatchUserFetchRequested = () => {
  const dispatch = useDispatch()
  const user = useUserSelector()

  useEffect(() => {
    if (!user) {
      dispatch({ type: userFetchRequestedAction.type })
    }
  }, [user])
}
