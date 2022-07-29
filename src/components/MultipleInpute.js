import React, {useState} from 'react';

const MultipleInpute = () => {

const [userDetails, setUserDetails] = useState({
    username: "",
    email : "",
    phone:""
})

const [records, setRecords] = useState([])

const handleInput=(e)=>{
    const nameProperty = e.target.name;
    const valueProperty = e.target.value;
    console.log(nameProperty);
    console.log(valueProperty);
    setUserDetails({...userDetails, [nameProperty]: valueProperty});
     //...userDetails will store previous datas of registration 
     //and nameProperty will stpte new datas
}


const handleSubmit=(e)=>{
    e.preventDefault();

    const newRecord = {...userDetails , id: new Date().getTime().toString()}
    
    console.log("records");
    setRecords([...records, newRecord]);
    console.log("records");

    setUserDetails({username : "", email:"", phone:""});
}

  return (

    <>
    <form action="" className="container" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Full Name</label>
            <input type="text" onChange={handleInput}  value={userDetails.username} autoComplete="off" name="username" id="username" />
        </div>
        <div>
            <label htmlFor="email">email</label>
            <input type="text" onChange={handleInput} value={userDetails.email} autoComplete="off" name="email" id="email" />
        </div>
        <div>
            <label htmlFor="phone">phone</label>
            <input type="text" onChange={handleInput} value={userDetails.phone} autoComplete="off" name="phone" id="phone" />
        </div>
        <div>
            <label htmlFor="passward">passward</label>
            <input type="text" autoComplete="off" name="passward" id="passward" defaultValue="12345"/>
        </div>

        <button type="submit">Registration</button>
        
    </form>

    <div>
        {
            records.map((currElem)=>{
                    // return(
                    //     <div className="showDataStyle" key={currElem.id}>
                    //         <p>{currElem.username}</p>
                    //         <p>{currElem.email}</p>
                    //         <p>{currElem.phone}</p>
                    //     </div>
                    // )
                    const { id, username, email, phone } = currElem;
                    return(
                        <div className="showDataStyle" key={id}>
                            <p>{username}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                        </div>
                    )
            })
        }
    </div>
    </>
  )
}

export default MultipleInpute