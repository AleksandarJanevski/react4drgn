import React from 'react';
import { Cake } from './Cake';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './Nav';
import { Comments } from './Comments';

export function App() {

    return (
        <div id="app">
            <h1>App</h1>
            <Nav />
            <Routes>
                <Route path='/cake' element={<Cake />} />
                <Route path="/comments" element={<Comments />} />
            </Routes>
        </div>
    )
}