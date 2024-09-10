import React from 'react'
import { useParams } from 'react-router-dom'
function Home() {
  const params = useParams();
  const {name} = params;
  return (
    <div>
      <h1>home {name}</h1>
    </div>
  )
}

export default Home
