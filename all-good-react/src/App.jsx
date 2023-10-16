import { useState } from 'react'
import user from "./user.json"
import { Card } from "./Card"

function App() {
  return(
    <div>
      <Card 
        name={user.name}
        age={user.age}
        address={user.address}
        phoneNumber={'01232149878'}
      />
    </div>
  )
}

export default App
