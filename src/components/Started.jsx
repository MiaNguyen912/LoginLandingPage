import React, { useState } from "react";

function Started(){
    const [headingText, setHeadingText] = useState("Hello"); //initial text is "Hello"
    const [isMouseOver, setMouseOver] = useState(false);
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    }); //name is an obj of fName, lName
    //----------------------------

    function handleClick(event){
        setHeadingText("Hello " + contact.fName + " " + contact.lName + ", you have submitted")
        event.preventDefault(); //when <form> is submit, the page will automatically refresh so we need to prevent that
    }
    function handleMouseOver(){
        setMouseOver(true);
    }
    function handleMouseOut(){
        setMouseOver(false);
    }
    function handleChange(event){ //event is the one triggers onChange
        //event is an obj with properties: type, target, ...
        //target is the element that triggers event, here is <input>
        //each time we type in a letter, onChange is triggered

        //never try to access event in the set state function
        // instead create var that holds event value
        
        // const fieldName = event.target.name; //lName/fName
        // const fieldValue = event.target.value;
        const {name, value} = event.target;
        
        // setContact((prevContact)=>{
        //     if (name === "fName")
        //         return{
        //             fName: value,
        //             lName: prevContact.lName,
        //             email: prevContact.email
        //         }
        //     else if (name === "lName")
        //         return{
        //             fName: prevContact.fName,
        //             lName: value,
        //             email: prevContact.email
        //         }
        //     else if (name === "email")
        //         return{
        //             fName: prevContact.fName,
        //             lName: prevContact.lName,
        //             email: value
        //         }
        // })

        // setContact(prevContact => {
        //     return{...prevContact, [name]: value}
        // })
        
        setContact(prevContact => ({...prevContact, [name]: value}))


    }
    //----------------------------

    return (
        <div className="container">
            <h1>{headingText}</h1>
            <form onSubmit={handleClick}>  
                <input 
                    onChange={handleChange}
                    type="text" 
                    placeholder="First name?" 
                    name="fName"
                    value={contact.fName} /* value is what currently inside input box */
                                        // value is controlled component as it changes when state changes
                />
               <input 
                    onChange={handleChange}
                    type="text" 
                    placeholder="Last name?" 
                    name="lName"
                    value={contact.lName} 
                />
                <input 
                    onChange={handleChange}
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    value={contact.email} 
                />
                <button 
                    type="submit"
                    style={{backgroundColor: isMouseOver? "black": "white" }}
                    // onClick={handleClick} 
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >Submit</button>
            </form>
        </div>
    )
}

export default Started;