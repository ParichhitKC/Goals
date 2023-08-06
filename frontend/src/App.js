import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";
import Login from "./pages/login";
import Header from "./components/header";
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
        </>
    );
}

export default App;
