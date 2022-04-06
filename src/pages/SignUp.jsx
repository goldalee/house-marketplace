import React from 'react'
import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {db} from '../firebase.config'
import {ReactComponent as ArrowRighIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
//import { async } from '@firebase/util'
import {setDoc, doc, serverTimestamp} from 'firebase/firestore'
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import OAuth from '../components/OAuth'

function SignUp () {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
    })
    const {name, email, password} = formData

    const navigate = useNavigate()

    const onChange =(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id]:e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
          const auth = getAuth()
    
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          )
    
          const user = userCredential.user
    
          updateProfile(auth.currentUser, {
            displayName: name,
          })
    
          const formDataCopy = { ...formData }
          delete formDataCopy.password
          formDataCopy.timestamp = serverTimestamp()
    
          await setDoc(doc(db, "users", user.uid), formDataCopy)
    
          navigate("/")
        } catch (error) {
          toast.error("Something went wrong with Registration")
        }
      }

  return (
    <>
    <div className='pageContainer'>
        <header>
            <p className='pageHeader'>Welcome Back!</p>
        </header>
        <form onSubmit={onSubmit}>
            <input type="text" className='nameInput' placeholder='Name' id="name" value={name} onChange={onChange}></input>
            <input type="email" className='emailInput' placeholder='Email' id="email" value={email} onChange={onChange}></input>
            <div className='passwordInputDiv'>
                <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='Password' id='password' value={password} onChange={onChange}></input>
                <img src={visibilityIcon} alt='show password' className='showPassword' onClick={() =>setShowPassword((prevState)=>!prevState)} ></img>
            </div>
            <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>
            <div className='signUpBar'>
                <p className='signUpText'>
                    Sign Up
                </p>
                <button className='signUpButton'>
                    <ArrowRighIcon fill='#ffffff' width='34px' height='34px' />
                </button>
            </div>
        </form>
        {/*Google OAuth Component*/}
        <OAuth />
        <Link to='/sign-in' className='registerLink'>
         Sign in Instead
        </Link>
    </div>
    </>
  )
}

export default SignUp