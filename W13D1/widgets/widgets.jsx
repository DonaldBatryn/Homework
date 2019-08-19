import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';

const deets = [
    {title: "one", description: "I am the first" },
    {title: "two", description: "Second is the best" },
    {title: "three", description: "Third is the one with the hairy chest" }
]

const Root = function(){
    return (
        <div>
            <Clock />
            <Tabs />
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('main');
    ReactDOM.render(<Root/>, root);
    
});

