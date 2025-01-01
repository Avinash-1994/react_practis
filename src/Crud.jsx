import {useState, useEffect} from "react";

function Crud(){
    const [items, setItems] = useState([]);
    const [itemValue, setitemValue] = useState("");
    
    // Data Fetch from API
    const fetchItem = async () => {
        try {
            const response = await fetch('http://localhost:3000/items');
            if (!response.ok) throw new Error("Failed To fetch api data");
            const fetchedData = await response.json();
            console.log(fetchedData);
            setItems(fetchedData);
        } catch (error) {
            console.error("Error", error);
        }
    };

    // Data Post to API
    const postData = async () => {
        // Input blank or white space or blank spaces (Validation)
        if(itemValue.trim() === "") return;

        try {
            const response = await fetch('http://localhost:3000/items', {
                method: 'POST',
                header: {"Content-Type": "application/json"},
                body: JSON.stringify(
                    {
                      name: itemValue 
                    }
                ),
            });
            if (!response.ok) throw new Error("Failed To fetch api data");
        } catch (error) {
            console.error("Error", error);
        }
    }

    useEffect(()=>{
        fetchItem()
    }, []);

    return (
        <div>
            <form onSubmit={postData}>
                <input type="text" onChange={(e) => {
                    setitemValue(e.target.value)
                }}  value={itemValue} />
                <button type='submit'>Data Submit</button>
            </form>
            <ul>
                {items.map((item) =>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}


export default Crud;