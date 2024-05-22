
import './App.css'
import Navbar from './componets/Navbar/Navbar'
import Home from './componets/Home/Home'
import Shipping from './componets/Shipping/Shipping'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Payment from './componets/Payment/Payment'
import Address from './componets/Address/Address'

function App() {
const router = createBrowserRouter([
  {
    path: '/', element : <Home />,
  },
  {
    path: '/shipping' , element : <Shipping />,
  },
  {
    path: '/payment' , element : <Payment />
  },
  {
    path: '/address' , element: <Address />
  }
])
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App