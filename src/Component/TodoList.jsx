import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export const TodoList = () => {
    const [text, setText] = useState("")
    const [data, setData] = useState([])
    const handleSubmit = () => {
        if (text.trim() != "") {
            setData([...data, text])
        }
        setText('')
    }
    const handleDelete = (item) => {
    const deleteData = data.filter((elem) => elem != item);
        setData(deleteData);
        }
    return (
        <div>
            <h1>📝 This is Todo list</h1>
            <h4>😎To double tap on text To-do to remove list of Todo</h4>
               <TextField id="a" 
                label="Please Enter To-Do List"
                variant="standard"
                color="warning"
                focused onChange={(e) => setText(e.target.value)} value={text} />
               <Button className="b" variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
            
            <ul>
                {data.map((item) => {
                    return (
                        <li className="a" onDoubleClick={() => handleDelete(item)}>{item} </li>
                        
                    )
                })}
            </ul>
        </div>
    )
}