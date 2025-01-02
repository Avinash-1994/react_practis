import { useState, useEffect } from "react";

function Crud(){
    const [fruitName, setFruitName] = useState("");
    const [items, setitem] = useState([]);

    //  Fetch My fruits
    const fetchFruits = async () => {
        try {
            const response = await fetch('http://localhost:3000/items');
            if (!response.ok) throw new Error("Faild, Please Recheck");
            const data = await response.json();
            // If succesfully Fetch the data from api
            setitem(data);
            
        } catch (error) {
            console.error("API Issue", error);
        }
    };

    console.log(items);

    useEffect(() =>{
        fetchFruits()
    }, []);

    return (
        <div>
            <h1>Add Fruits</h1>
            <form >
                <input type="text"  />
                <button type='button'>Add My fruits</button>
            </form>
            <div>
                <ul>
                    {items.map((item) =>{
                        <li key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
};

export default Crud;
