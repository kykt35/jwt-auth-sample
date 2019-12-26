import React from 'react'
import { Link } from 'react-router-dom'
import { useMeQuery } from './generated/graphql'

export const Header: React.FC = () => {
  const { data, loading } = useMeQuery()

  let body: any = null

  if (loading) {
    body = null
  } else if (data && data.me) {
    body = <div>you are logged in as {data.me.email}</div>
  } else {
    body = <div>not logged in</div>
  }

  return (
    <header>
      <div>
        <Link to='/'>home</Link>
      </div>
      <div>
        <Link to='/register'>register</Link>
      </div>
      <div>
        <Link to='/login'>login</Link>
      </div>
      <div>
        <Link to='/bye'>bye</Link>
      </div>
      {body}
    </header>
  )
}

export default Header