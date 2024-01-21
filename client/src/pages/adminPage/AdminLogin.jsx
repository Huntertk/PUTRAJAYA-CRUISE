import React, { useEffect, useState } from 'react'
import '../../styles/adminLogin.scss'
import bgImg from '../../assets/images/adminLogin.jpg'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { adminLoginFailed, adminLoginStart, adminLoginSuccess } from '../../features/admin/adminSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useAdminLoginMutation } from '../../redux/api/adminAuthApi'

const AdminLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {adminEmail, loading, error} = useSelector(state => state.admin) 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [adminLogin] = useAdminLoginMutation()

      const handleAdminLogin = async (e) => {
       e.preventDefault()
        adminLogin({email, password})
    }

    useEffect(() => {
      if(adminEmail){
        navigate("/admin/all-booking")
      }
    }, [adminEmail])

  return (
    <main className='mainContainer' style={{backgroundImage: `url(${bgImg})`}}>
        <div className="loginFormWrapper">
            <form onSubmit={handleAdminLogin}>
                <h1>Admin Login</h1>
                <input 
                type="email" 
                placeholder='Email' 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                placeholder='Password' 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' disabled={loading}>{loading ? "Loading...." : "login"}</button>
            </form>
        </div>
    </main>
  )
}

export default AdminLogin