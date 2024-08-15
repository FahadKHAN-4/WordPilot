import React, {useState} from 'react'

export default function TextForm(props){

    const [text, setText] = useState("")

    // Uppercase
    const handleUpClick = () =>{
        console.log("Uppercase was clicked" + text )
        let newText = text.toUpperCase();
        setText(newText)
    }

    // Lowercase
    const handleDownClick = () =>{
        console.log("Uppercase was clicked" + text )
        let newText = text.toLowerCase();
        setText(newText)
    }

    // Clear
    const handleClearClick = () =>{
        console.log("Uppercase was clicked" + text )
        let newText = "";
        setText(newText)
    }

    // On change
    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }

    // Remove extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "))
    }

    return(
        <>
            <div className='container' style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}}>
                <h1>{props.heading}</h1>
                
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} placeholder="Enter your text here"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convet to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convet to Lowercase</button>
                <button className='btn btn-success mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                

                <button className="btn btn-outline-danger mx-1" onClick={handleClearClick}>Clear</button>
            
            </div>
            <div className='container' style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}}>
                <h1>My Text Summary:</h1>
                <p>{text.split(" ").length - 1} words and {text.length - text.split(" ").length + 1} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h1>Preview:</h1>
                <p>{text.length>0 ? text : "Type text in the box above to see it here!"}</p>
            </div>

        </>
        
    )
}