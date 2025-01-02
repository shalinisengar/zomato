import React, { useEffect, useState } from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'
import {FaUserAlt}  from 'react-icons/fa';
import {BiLogInCircle}  from 'react-icons/bi';
import Logo from './Zomato-Logo.png'
import Card from './Card';
import City from './City';
import Footer from './Footer';
import img from './BackGround.png';


const Home = () => {
  const [data , setdata] = useState(null)
  useEffect(()=>{
    let data1 = localStorage.getItem('userData')
    console.log(data1,'dataa');
    let newData = JSON.parse(data1)
    console.log(newData);
    setdata(newData)

  },[])

  let remove = ()=>{
    localStorage.clear('userData')
    setdata(null)
  }
  return (
    <>
         <div className='parent'>

<img className='img' src={img} alt="logo" />   {/* background image */}

<div className='icons-bg'>
<div className='div1'>
    <span className='floar-right1'> <NavLink   to='/view' className='color-b'>View Food</NavLink> </span> 
    <span className='floar-right2'> <NavLink   to='/addres' className='color-b'>Add Restaurant</NavLink> </span> 
</div>
<div className='div2'> 
{


data? (  <>   <p>{data.userData.name}</p>
<span  onClick={remove}   className='floar-right2'> <NavLink  className='color-b'>Logout<BiLogInCircle/> </NavLink> </span>  

</>


):

(     <>   
<span className='floar-right1'>  <NavLink  to='/signup'  className='color-b'><FaUserAlt/> Sign-up</NavLink> </span> 
<span className='floar-right2'> <NavLink  to='/login' className='color-b'>Login <BiLogInCircle/></NavLink>  </span>    </>  )
}


</div>
</div>
      <div>
      <div className='heading-zomato'>
        <img src={Logo} alt="logo" />
        </div> 
      </div>
      <div className='input-search'>
      <h3 id='h3'>Discover the best food & drinks in Chitkara</h3>
      <div className="inp">
    <select name="" id="">
        <option value="Chennai">Chennai</option>
        <option value="Jaipur">Jaipur</option>
        <option selected value="Gwalior">Gwalior</option>
        <option  value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Kolkata">Kolkata</option>
    </select>
    <input type="text" placeholder="Search for restaurant or a dish"/>
    </div>
      </div>

        <Card/>
        <section>
          <City/>
        </section>
        <footer>
          <Footer/>
        </footer>
        
        </div>
    </>
  )
}

export default Home