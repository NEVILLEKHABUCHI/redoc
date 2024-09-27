import {Route, Routes} from 'react-router-dom'
import Main from './Main';
import Account from './Account';
import Socials from './Socials';
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={ <Main /> }></Route>
        <Route path='/account' element={ <Account /> }></Route>
        <Route path='/socials' element={<Socials/> }></Route>
      </Routes>
    </div>
  )
}

export default App;