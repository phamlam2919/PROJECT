import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Pages/register/Register";
import Register1 from "./Pages/register/Register1";
import Register2 from "./Pages/register/Register2";

function App() {
    return (
        <>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/register1" element={<Register1 />} />
                <Route path="/register2" element={<Register2 />} />
            </Routes>
        </>
    );
}

export default App;
