import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {

    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

            {/* one toast container for the whole app in the parent component */}
            <ToastContainer></ToastContainer>
        </>
    )
}

export default App
