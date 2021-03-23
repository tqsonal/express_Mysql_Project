import React,{useState} from 'react'
import axios from 'axios'


function App() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const [userNameLogin, setUserNameLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')


  const[ isLoggedIn ,setIsLoggedIn]= useState('')

  const register =(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{userName,password}).then(res=>console.log(res))
  }

  const Login=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{userName:userNameLogin,password:passwordLogin}).then(res=>
        {
          if(res.data.message) setIsLoggedIn(res.data.message)
          // console.log(res.data)
          else setIsLoggedIn(`login SuccessFull for ${res.data[0].username}`)
      }
    )
  }
  return (
    <div className="App">
      <form>
        <h1> Registration</h1>
        <div>
        <label> userName </label>
        <input type="text" onChange={(e)=>setUserName(e.target.value)}/>
        </div>
        <div>
        <label> password </label>
        <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
        <button onClick={register}> Register </button>
        </div>
      </form>





      <form>
        <h1> LogIn</h1>
        <label> userName </label>
        <input type="text"  onChange={(e)=>setUserNameLogin(e.target.value)}/>
        <label> password </label>
        <input type="text"  onChange={(e)=>setPasswordLogin(e.target.value)}/>
        <button onClick={Login}> Login </button>
      </form>

      <h1> {isLoggedIn}</h1>
      
    </div>
  );
}

export default App;
