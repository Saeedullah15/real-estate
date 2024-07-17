import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {

    return (
        <>
            <div className='md:max-w-7xl mx-auto'>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

            {/* one toast container for the whole app in the parent component */}
            <ToastContainer></ToastContainer>
        </>
    )
}

export default App
