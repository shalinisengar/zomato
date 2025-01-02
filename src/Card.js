import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const card = () => {
  return (
    <div>
      <section className="container-sm w-75">
        <div className="row d-flex justify-content-between align-item-center">
          <div class="card p-0" style={{ width: 335, height: 260, borderRadius:20}}>
            <img
                        style={{ height: 170 }}
                        src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              class="card-img-top"
              alt="img"/>
            <div class="card-body">
              <h5>Order Online</h5>
              <p class="card-text">Stay home and order to your doorstep</p>
            </div>
          </div>
          <div class="card p-0" style={{ width: 335, height: 260,borderRadius:20 }}>
            <img
                        style={{ height: 170 }}
              src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              class="card-img-top"
              alt="img"/>
            <div class="card-body">
              <h5>Dining</h5>
              <p class="card-text">View the city's favourite dining venues</p>
            </div>
          </div>
          <div class="card p-0" style={{ width: 335, height: 260,borderRadius:20 }}>
            <img
                        style={{ height: 170 }}
                        src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              class="card-img-top"
              alt="img"/>
            <div class="card-body">
              <h5>Nightlife and Clubs</h5>
              <p class="card-text">Explore the city's top nightlife outlets</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    // <div className='container' >
    //    <div className='row'>
    //     <div className='col-lg-4'>
    //         <img  src='https://media.istockphoto.com/id/1292640617/photo/sev-puri-is-a-famous-midday-snack-in-india-served-over-a-rustic-wooden-background-selective.jpg?s=612x612&w=0&k=20&c=PP2WC5Z-ri3QmneP8PWu99ic4-j9x3LGlUUKMYos42U='/>
    //           <h2>Order food</h2>
    //           <p>Stay home</p>
    //     </div>
    //     <div className='col-lg-4'>
    //         <img src='https://media.istockphoto.com/id/1220129869/photo/indian-sweet-jalebi-in-a-handmade-pottery-bowl-on-wooden-background.webp?b=1&s=170667a&w=0&k=20&c=Any75ogz7DoGTZzUfW8_YQAR_lq9L0aQVlnCxi9wpZE='/>
    //           <h2>Order food</h2>
    //           <p>Stay home</p>
    //     </div>
    //     <div className='col-lg-4'>
    //         <img src='https://media.istockphoto.com/id/1194711348/photo/gulab-jamun-in-white-bowl.jpg?s=612x612&w=0&k=20&c=guuOGcLlWOc08IBf9eEzTXOlhk2hVOLxSe1N_c1bi2Y='/>
    //           <h2>Order food</h2>
    //           <p>Stay home</p>
    //     </div>

    //    </div>
    // </div>
  );
};

export default card;
