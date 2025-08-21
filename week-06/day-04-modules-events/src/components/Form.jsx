import { useState } from 'react';
function Form() {

   const [inputVal, setInputVal] = useState("");
   const [inputList, setInputList] = useState([]);

    function handleChange(event){
        // console.log(event.target.value);
        setInputVal(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputVal);

        setInputList([...inputList, inputVal]);
    };
    return <>
    <form onSubmit={handleSubmit} >
        <label>Input field</label>
        <input onChange={handleChange} type="text" />
        <button type="submit" >Submit</button>
    </form>    
        <br />
        {/* Display what has been typed into the textbox as it changes */}
        {/* {inputVal} */}

        <ul>
            {inputList.map(function(item, index) {
                return  <li key={index}>{item}</li>
            })}
        </ul>
    </>
}

export default Form;