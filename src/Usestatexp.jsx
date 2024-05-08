import React, { useState } from "react";

function Usestatexp() {
    let [text,setText]=useState(false);
    
    
    function setTxt(e){
        setText(e.target.value);
    }
   
function handleClick(){
if(text==false){
    setText(true)
}
else{
    setText(false)
}
    
}
  return (
    <>
      <div>
        <h1>HiII</h1>
        <div className=" justify-items-center">
          UserID:
          <input type="text" onChange={(e)=>setTxt(e)}/>
          <br />
          Password:
          <input type="text" onChange={(e)=>setTxt(e)}/>
          <br />
        </div>
        <button type="button" onClick={()=>handleClick()}>Submit</button>
        


        
        {
             (text===true?<h1>Log in</h1>:<h1>Log out</h1>)
        }
        

        <div>
            <h1>{text}</h1>
        </div>
      </div>
    </>
  );
}
export default Usestatexp;
