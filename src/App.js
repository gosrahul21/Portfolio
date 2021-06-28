import React from 'react'
import Home from './Home'
import db from './db.json'
const App = () => {
    console.log(db)
    return (<div>
        
        <Home/>
    </div>)
}

export default App;