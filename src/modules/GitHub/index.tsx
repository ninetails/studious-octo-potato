import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatchUserFetchRequested, useUserSelector } from './store'

export default function GitHub () {
  const { query, replace } = useRouter()
  const user = useUserSelector()

  useDispatchUserFetchRequested()

  useEffect(() => {
    if (query.code) {
      replace('/')
    }
  }, [query.code])

  if (!user) {
    return (
      <a href={`https://github.com/login/oauth/authorize?scope=user:email&client_id=${process.env.NEXT_PUBLIC_GITHUB_API_CLIENT_ID}`}>Login</a>
    )
  }

  return (
    <>
      Logged
    </>
  )
}
