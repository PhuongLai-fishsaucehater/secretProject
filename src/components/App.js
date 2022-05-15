import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './Welcome.js'
import { Menu } from './Menu.js';

export function App(props) {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Menu' element={<Menu />}/>
            </Routes>
        </Router>
    ); 
}