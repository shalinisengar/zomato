import React, { useState } from 'react'
import arr from './Carddata';

// import Logo from './Zomato-Logo.png'

const Veiwfood = () => {
const [search ,Setsearch] = useState()
const [data,Setdata]= useState(arr)
const fun1=(e)=>{
console.log(e.target.value);
Setsearch(e.target.value)
}
let fun2=(e)=>{
  e.preventDefault()

  let newA = data.filter((str)=>{
    return str.text===search

  })
  Setdata(newA)
  Setsearch('')

}
  return (
    <div>
        <div className='container-sm w-75 d-flex justify-content-between align-item-center ' >

            <img style={{width:'15rem'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGTZHs9bDIfNQ1sobj_xrUlY03gt9cYLgjA&usqp=CAU'/>
            {/* <h2>Search here</h2> */}
        </div>
        
        <form class="container-sm d-flex justify-content-center align-item-center">
  
  <div class="col-lg-4 m-2 ">
    <label for="inputPassword2" class="visually-hidden">Search</label>
    <input onChange={fun1} value={search}  type="text" class="form-control" id="inputPassword2" placeholder="Search here"/>
  </div>
  <div className='mt-2 ml-2'>
  {/* <button class="button">Search Now</button> */}
    <button onClick={fun2} type="submit" class="btn btn-primary w-8" style={{height:44}}> Search </button>
  </div>
</form>

<section className='container-sm w-75'>
  <h2 style={{fontWeight:400}}>Best food in the Bhopal</h2>
    <div className='row d-flex justify-content-between align-item-center'>
      {
          data.map((res)=>{
            return (
               <div class="card mt-5" style={{width: 300}}>
                <img  style={{height: 300}}src={res.img} class="card-img-top" alt="img"/>
        <div class="card-body">
          <p class="card-text">{res.text}</p>
        </div>
    </div> 
            )
          })
      }
      
      
      

    </div>

</section>

       
       
           
            
        
    </div>
  )
}

export default Veiwfood