import { useState } from "react";


const complainData={
    username:"",
    roomNo:"",
    complain:"",
}
 const Complain =()=>{
    const [complain,setComplain]=useState(complainData);
  
    const handleInput=(e)=>{
        //spread operator kehte h issey shayad
       
        let name=e.target.name;
        let value=e.target.value;

        setComplain({
            ...complain,
            [name]:value,
        })
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
   
    }

    return(
        <>
        <section>
            <main className="boxe">
                <form onSubmit={handleSubmit}>
                <div className="inputBox">
    <label htmlFor="username">username</label>
    <input
    type="text"
    name="username"
    placeholder="username"
    id="username"
    required
    autoComplete="off"
    value={complain.username}
    onChange={handleInput}
   />
    </div>
         <div className="inputBox">
            <label htmlFor="roomNo">roomNo</label>
            <input
            type="text"
            name="roomNo"
            id="roomNo"
            placeholder="room no"
         required
         autoComplete="off"
         value={complain.complain}
         onChange={handleInput}
         />
         </div>
         <div className="inputBox">
    <label htmlFor="complain">complain</label>
    <input
    type="text"
    name="complain"
    placeholder="enter your complain"
    id="complain"
    required
    autoComplete="off"
    value={complain.complain}
    onChange={handleInput}
    cols="30"
    rows="3"
   />
    </div>
    <button type="submit" style={{ float: 'left' }}>Submit</button>
                </form>
            </main>
        </section>
        </>
    )
}
export default Complain;