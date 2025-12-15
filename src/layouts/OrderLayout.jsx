import Header from '../components/Header'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

export default function OrderLayout() {
  return (
    <>
    <Header/>
       <Outlet/>
    <Footer/>
    </>
  )
}
