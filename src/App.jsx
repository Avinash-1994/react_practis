import { useState, useEffect } from 'react';

function App() {

  const [greeting, setGreeting] = useState("Watning for data...");

  useEffect(() =>{
      fetch("http://localhost:5000/")
        .then((response) => response.text())
        .then((data) => setGreeting(data))
        .catch((error) => console.error(error))
  }, []);

  return (
    <div>
        <h1>{greeting}</h1>
    </div>
  )
}

export default App


// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 5000;

// app.use(cors());

// app.get('/', (req, res) =>{
//     res.send("Hello Ayushman");
// })

// app.listen(port, ()=>{
//     console.log("Connection is working fine");
// })