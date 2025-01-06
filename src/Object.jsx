import { useEffect, useState } from "react"

const Object = ()=>{

    const [data, setData] = useState(null)
    useEffect(()=>{
             fetch("http://localhost:5000/")
            .then((response)=>{
                response.json()
            })
            .then((data)=>{
                console.log(data)
                setData(data)
            })
            .catch((error)=>{
                console.error(error)
            })
    }, [])
    
    return(
        <>
            <h1>asdfgh</h1>
            {/* {data.name} */}
            {/* data.map((item)=>{

            }) */}
        </>
    )
}

export default Object;



// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(cors());
// const port = 5000;




// app.get("/", (req, response)=>{
//     const anyobj = {
//         name:"Avinash",
//         monileNo : "9638252741",
//         location:"bilaspur",
//         curentCity:"chennai"
//     };
//     response.json(anyobj);
// });

// app.listen(port, ()=>{
//     console.log("Connected");
// });