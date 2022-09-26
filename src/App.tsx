import React from "react";
import './styles/index.css'
import './styles/grid.css'
import './styles/utils.css'
import './styles/text.css'
import './styles/flex.css'
import './styles/color.css'
import {Route, Routes} from "react-router";
import MainPage from "./pages/Main";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    )
}

export default App;
