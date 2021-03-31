import { useCallback } from "react"
import { x } from "@xstyled/styled-components"
import { useDispatch, useSelector } from "react-redux"
import { actions, CounterStore, name } from '../store'

export default function CounterDisplay() {
  const { value } = useSelector(({ counter }: { [name]: CounterStore}) => counter)
  const dispatch = useDispatch()

  const increment = useCallback(() => dispatch(actions.increment()), [])
  const decrement = useCallback(() => dispatch(actions.decrement()), [])

  return (
    <>
      <x.button onClick={increment}>+</x.button>
      {value}
      <x.button onClick={decrement}>-</x.button>
    </>
  )
}
