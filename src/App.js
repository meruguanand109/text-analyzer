import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [text,setText]=useState("")
    const [searchString,setSearchString]=useState("")
    const [replaceString,setReplaceString]=useState("")
    const [CharactersCount,setCharacterCount]=useState(0)
    const [uniqueWordCount,setUniqueWordCount]=useState(0)
    const HandleTextInput=event=>{
        setText(event.target.value)
       
    }
    useEffect(()=>{
        const wordsArray= text.toLowerCase().match(/\b\w+\b/g) || [];
        const uniqueSet=new Set(wordsArray)
        setUniqueWordCount(uniqueSet.size)
        let count=0
        for(let i of text){
            if (i.match(/[a-zA-Z0-9]/)) {
                count++; // Increment count for valid characters
              }
        }
        setCharacterCount(count)
    },[text])
    const HandleSearchString=event=>{
        setSearchString(event.target.value)
    }
    const HandleReplaceString=event=>{
        setReplaceString(event.target.value)
    }
    const HandleReplace=()=>{
        const regex = new RegExp(searchString, 'gi');
        const updatedText = text.replace(regex, replaceString);
        setText(updatedText)
    }
    
    return(
        <div className='text-analyzer'>
            <textarea rows="10" cols="50" placeholder='Enter your text here' value={text} onChange={HandleTextInput}></textarea>
            <h2>Characters Count: {CharactersCount}</h2>
            <h2>Words Count: {uniqueWordCount}</h2>
            <input type="text" value={searchString} onChange={HandleSearchString} placeholder='Search String'/>
            <input type="text" value={replaceString} onChange={HandleReplaceString} placeholder='Replace String'/>
            <button onClick={HandleReplace}>Replace All</button>
        </div>
    )
}

export default App