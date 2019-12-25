import React from 'react'
import { useHelloQuery } from './generated/graphql'

const App: React.FC = () => {
  const { data, loading } = useHelloQuery()

  if (loading || !data) return <div>Loading...</div>

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data.hello}</h1>
      </header>
    </div>
  )
}

export default App
