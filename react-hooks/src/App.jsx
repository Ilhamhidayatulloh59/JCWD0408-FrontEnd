import { createContext, useState } from 'react'
import './App.css'
import EffectComp from './component/effect'
import MemoComp from './component/memo'
import RefComp from './component/ref'
import StateComp from './component/state'
import ContextComp from './component/context'
import ReducerComp from './component/reducer'
import CallbackComp from './component/callback'
import CustomComp from './component/custom'

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState("Burhan")
  return (
    <div>
      <UserContext.Provider value={user}>
        {/* <StateComp /> */}
        {/* <EffectComp /> */}
        {/* <RefComp /> */}
        <MemoComp />
        {/* <ContextComp /> */}
        {/* <ReducerComp /> */}
        {/* <CallbackComp /> */}
        {/* <CustomComp /> */}
      </UserContext.Provider>
    </div>
  )
}

export default App
