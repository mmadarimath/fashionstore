import { Routes, Route } from 'react-router-dom';
import Home from './routes/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/signin/signin.component';

const Shop = () => {
  return (
    <div>
      <h1>I am the Shop Page</h1>
    </div>

  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>




  )
}

export default App;


