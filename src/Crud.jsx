import {useState, useEffect} from "react";

function Crud(){
    const [items, setItems] = useState([]);
    const [itemValue, setitemValue] = useState("");
    const [updateItem, setUpdateItem] = useState(null);
    
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

    // Data Edit from API
    const editItems = async () => {
        if (!updateItem) return;
        try {
            const response = await fetch(`http://localhost:3000/items/${updateItem.id}`, {
                method: 'PUT',
                header: {"Content-Type": "application/json"},
                body: JSON.stringify(
                    {
                      name: itemValue 
                    }
                ),
            });
            if (!response.ok) throw new Error("Failed To fetch api data");
            console.log("Check 1")
        } catch (error) {
            console.error("Error", error);
        }
    }

    
    // Check Post and Edit function
    const checkMyPostValidData = () =>{
        if(itemValue.trim() === "") return;
        if(updateItem){
            editItems();
        }else{
            postData();
        }
    };


    // Update Data (EDIT Only)
    const checkMyEditValidData = (item) =>{
        setUpdateItem(item);
        itemValue(item.name);
    };


    useEffect(()=>{
        fetchItem()
    }, []);

    return (
        <div>
            <h1>{updateItem ? "Edit item" : "Post Data"}</h1>
            <form onSubmit={checkMyPostValidData}>
                <input type="text" onChange={(e) => {
                    setitemValue(e.target.value)
                }}  value={itemValue} />
                <button type='submit'>{updateItem ? "Data Edit" : "Data Post"}</button>
            </form>
            <ul>
                {items.map((item) =>(
                    <li key={item.id}>{item.name} <button type='button' onClick={() => checkMyEditValidData(item)}>Edit</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Crud;