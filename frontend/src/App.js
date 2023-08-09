import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";
import Login from "./pages/login";
import Header from "./components/header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <>
            <Router>
                <Header/>
                <div className={"container"}>
                    <Routes>
                        <Route path={'/'} element={<Dashboard/>}></Route>
                        <Route path={'/login'} element={<Login/>}></Route>
                        <Route path={'/register'} element={<Register/>}></Route>
                    </Routes>
                </div>
            </Router>
            <ToastContainer/>
        </>
    );
}

export default App;
