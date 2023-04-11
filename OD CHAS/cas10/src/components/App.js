import React from 'react';
// import Hello from './Hello';
import { HelloFunc } from './HelloFunc';

export function App(){

    return(
        <div id="app">
            <h2>App</h2>
            {/* <Hello/> */}
            <HelloFunc/>
        </div>
    )
}