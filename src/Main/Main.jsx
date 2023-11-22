import React from 'react'
import './Main.css'
function Main() {
let value=''
function emailChecker (e){
    // e.preventDefault()
    value= e.target.value.slice(-3);
    // console.log(value)
}
function resultant (e){
    e.preventDefault()
    let result=document.querySelector(".result")
    if (value!=='.ru'){
        result.innerText="Invalid value"
        result.style.display='block'
        // alert("Enter valid text")
    }else {
        result.innerText='';
        result.style.display="none"
    }

}


  return (
    <div className='main'>
<h2>Login</h2>
<form>
    <label htmlFor='email'>
<input onKeyUp={emailChecker} type="text" className="email" placeholder='Enter your email'
id="email" /> 

    </label> 
    <br />
    <p className='result'></p>
     
    <label htmlFor="password">
    <input type="password" className="password" placeholder='Enter your password' id="password" minLength={8}/>
    </label> <br /> <br />
    <button onClick={resultant}> Login</button>
</form>



</div>
  )
}

export default Main