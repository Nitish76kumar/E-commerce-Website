const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
 
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Fashion Shopping</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
  <style>@import url( "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,300&display=swap");



  *{
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  }
  
  :root{
  --primary:indianred;
  --secondary:rgba(15,10,29,0.849);
  --light:#2f3640;
  } 
  
  header{
      width: 100%;
      height: 100vh;
  }
  
  .nav1{
      height: 80px;
      width: 100%;
      display:flex;
      justify-content:space-around;
      align-items: center;
      flex-wrap:wrap;
      box-shadow: 2px 0px 3px gray;
      text-align: center;
  }
  .nav1 .left{
      flex-basis: 50%;
      letter-spacing: 2px; 
  
  }
  
  .nav1 .left a{
      color: var(--primary);
      font-weight: bold;
      margin: 0px 5px;
  }
  
  .right{
      flex-basis: 50%;
  }
  
  .right i{
      font-size: 20px;
      margin: 0px 15px;
      padding: 8px;
      cursor: pointer;transition: 0.4s ease-in-out;
  }
  
  .nav1 .right i:hover{
      transform: rotate(360deg);
      background-color: rgb(179, 176, 176);
  }
  
  .nav2 {
      width: 100%;
      height: 120px;
      display: flex;
      justify-content:space-between;
      align-items: center;
      flex-wrap: wrap;
      text-align: center;
  }
  
  .nav2 .nav2-left,.nav2 .nav2-center,.nav2 .nav2-right{
      flex-basis: 30%;
      margin: auto;
      cursor: pointer;
  }
  .nav2 .nav2-left i{
      margin-left: 15px;
  }
  
  .nav2 .nav2-center h1{
      color: var(--primary);
      font-size: 2rem;
      letter-spacing: 4px;
      font-weight: bold;
  }
  .nav2 .nav2-center h1 span{
      color: var(--secondary);
  }
  
  .nav2 .nav2-center p{
      color: grey;
      font-size: 15px;
      margin-top: 5px;
  }
  .nav2 .nav2-right i{
      margin: 0px 7px;
  }
  
  .nav3{
  width: 100%;
  height: 70px;
  line-height: 70px;
  
  }
  
  .nav3 ul{
      list-style: none;
      text-align: center;
  }
  .nav3 ul li{
      display: inline-block;
      width: 150px;
      position: relative;
      z-index: 99;
  }
  .nav3 ul li a{
      color: var(--secondary);
      display: block;
      font-weight: 500;
  }
  .nav3 ul li a:hover{
      color: peru;
  }
  .nav3 ul li i{
      color: var(--primary);
      margin: 0px 5px;
  }
  
  .nav3 ul ul {
      position: absolute;
      top: 70px;
      left: 0;
  display: none;
  }
  
  .nav3 ul ul li{
      background-color: white;
      border-bottom: 1px solid var(--primary);
  }
  
  .nav3 ul li:hover > ul{
      display: block;
  }
  
  .featured{
      width: 100%;
      height: 60vh;
      background:linear-gradient(to right, rgba(0,0,0,.9) 20%,rgba(255,255,255,0.2)),url('g1.jpg');
      background-size: cover;
      background-position: top;
      position: relative;
  }
  
  .featured-text{
      max-width: 500px;
      position: absolute;
      top: 50%;
      left: 20%;
      color: white;
      text-align: center;
      padding: 10px;
      font-size: 2rem;
      letter-spacing: 5px;
      
  }
  
  .featured-text button{
      padding: 10px 20px;
      border: none;
      outline: none;
      background-color: var(--secondary);
      margin: 20px 0px;
      color: white;
  }
  .latest{
      padding: 50px 100px;
  }
  .product-intro{
      text-align: center;
  }
  .product-intro h1{
      color: var(--primary);
      letter-spacing: 0.2rem;
      font-size: 2rem;
      font-weight: bolder;
  }
  .product-intro h1 span{
      color: var(--secondary);
  }
  .product-intro p{
      color: grey;
      padding: 15px 0;
  }
  
  .card-container{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      margin: 4rem 0;
  }
  .card-container .card{
      flex-basis: 20%;
      padding: 0.8rem;
      position: relative;
  
  }
  .card img{
      width: 100%;
      transition: 0.5s ease-in-out;
  }
  .card i{
      color: goldenrod;
      margin: 10px 0;
  }
  
  .card button{
      color: white;
      background-color: var(--secondary);
      border: none;
      outline: none;
      margin-top: 15px;
      padding:5px 20px;
  }
  .card:hover img ,.card:hover h1{ 
   width: 80%;
   color: var(--primary);
  }
  .card::before{
      content: '20% off';
      width: 25%;
      height: 25px;
      line-height: 25px;
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--primary);
      padding: 0px 4px;
      transform: rotate(-20deg);
  }
  .trends{
      padding: 50px 100px;
      background-color: rgba(0,0,0,0.01);
  }
  .swiper {
      width: 300px;
      height: 300px;
      padding: 50px;
    }
  
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
      height: 300px;
    }
  
    .swiper-slide img {
      display: block;
      width: 100%;
    }
    footer{
      background-color: var(--secondary);
      color: white;
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      margin-top: 80px;
      flex-wrap: wrap;
      padding: 2rem;
    }
    footer div{
      flex-basis: 30%;
    }
  footer h1{
      letter-spacing:0.5rem;
  }
  footer h1 span{
      color: var(--primary);
  }
  
  footer p{
      font-size: 1rem;
  }
  footer i{
      margin: 0px 5px;
  }
  
  @media only screen and (max-width:769px){
      
  }</style>
  </head>
  
  <body>
      <header>
          <nav class="nav1">
              <div class="left">
                  <span>Welcome to my E-shop</span>
                  <a href="#">Register</a> OR
                  <a href="#">Login</a>
              </div>
              <div class="right">
                  <i class="fa fa-facebook"></i>
                  <i class="fa fa-instagram"></i>
                  <i class="fa fa-whatsapp"></i>
                  <i class="fa fa-twitter"></i>
                  <i class="fa fa-pinterest"></i>
              </div>
          </nav>
          <!---------nav1 end-->
          <!---------nav2 start-->
          <nav class="nav2">
              <div class="nav2-left">
                  <i class="fa fa-phone"></i>+91 76677806..
                  <i class="fa fa-envelope"></i>nitish@gmail.com
              </div>
              <div class="nav2-center">
                  <h1>Apni <span>Dukan</span></h1>
                  <p>Everything for kids world</p>
              </div>
              <div class="nav2-right">
                  <i class="fa fa-map"></i>Contact Us
              </div>
          </nav>
          <!---------nav2 end-->
  
          <!--------start nav3-->
          <nav class="nav3">
              <ul>
                  <li><a href="#"><i class="fa fa-home"></i>Home</a></li>
                  <li><a href="#"><i class="fa fa-user"></i>User</a></li>
                  <li><a href="#"><i class="fa fa-user"></i>Accessories</a></li>
                  <li><a href="#"><i class="fa fa-anchor"></i>Toys<i class="fa fa-caret-down"></i></a>
                      <ul>
                          <li><a href="#"><i class="fa fa-clipboard"></i>Wooden</a></li>
                          <li><a href="#"><i class="fa fa-circle-o"></i>Plastic</a></li>
                          <li><a href="#"><i class="fa fa-gavel"></i>Iron</a></li>
                      </ul>
                  </li>
                  <li><a href="#"><i class="fa fa-calendar-check-o"></i>Special</a></li>
                  <li><a href="#"><i class="fa fa-search"></i>Find</a></li>
  
              </ul>
          </nav>
          <!--------end nav3-->
  
          <!------------Feature start--->
          <section class="featured">
              <div class="featured-text">
                  <button>Coming</button>
                  <h2>Our new degins</h2>
              </div>
          </section>
  
          <!------------Feature End--->
      </header>
  
      <!---------latest start-->
      <section class="latest">
          <div class="product-intro">
              <h1>New <span>Arrivals</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, dignissimos.</p>
          </div>
          <div class="card-container">
              <div class="card">
                  <div>
                      <img src="s2.jpg" alt="">
                  </div>
                  <h1>Branded Shoes</h1>
                  <span>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </span>
                  <p>$500.00</p>
                  <button>Add to cart</button>
              </div>
  
              <div class="card">
                  <div>
                      <img src="s3.jpg" alt="">
                  </div>
                  <h1>Branded Shoes</h1>
                  <span>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </span>
                  <p>$500.00</p>
                  <button>Add to cart</button>
              </div>
  
              <div class="card">
                  <div>
                      <img src="s8.jpg" alt="">
                  </div>
                  <h1>Branded Shoes</h1>
                  <span>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </span>
                  <p>$500.00</p>
                  <button>Add to cart</button>
              </div>
  
              <div class="card">
                  <div>
                      <img src="s2.jpg" alt="">
                  </div>
                  <h1>Branded Shoes</h1>
                  <span>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </span>
                  <p>$500.00</p>
                  <button>Add to cart</button>
              </div>
          </div>
          <div class="card-container">
              <div class="card">
                  <div>
                      <img src="s2.jpg" alt="">
                  </div>
                  <h1>Branded Shoes</h1>
                  <span>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </span>
                  <p>$500.00</p>
                  <button>Add to cart</button>
              </div>
  
              <div class="card">
                  <div>
                      <img src="s3.jpg" alt="">
                  </div>
                  <h1>Branded Shoes</h1>
                  <span>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </span>
                  <p>$500.00</p>
                  <button>Add to cart</button>
              </div>
  
              <div class="card">
                  <div>
                      <img src="s8.jpg" alt="">
                  </div>
                  <h1>Branded Shoes</h1>
                  <span>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </span>
                  <p>$500.00</p>
                  <button>Add to cart</button>
              </div>
  
              <div class="card">
                  <div>
                      <img src="s2.jpg" alt="">
                  </div>
                  <h1>Branded Shoes</h1>
                  <span>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </span>
                  <p>$500.00</p>
                  <button>Add to cart</button>
              </div>
          </div>
      </section>
      <!---------latest end-->
  
      <!------popular product start----------->
      <section class="latest">
          <div class="product-intro">
              <h1>Popular <span>Products</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, dignissimos.</p>
          </div>
          <div class="card-container">
              <div class="card">
                  <div>
                      <img src="bu2.jpg" alt="">
                  </div>
                  <h1>Branded Shoes</h1>
                  <span>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </span>
                  <p>$500.00</p>
                  <button>Add to cart</button>
              </div>
  
              <div class="card">
                  <div>
                      <img src="bu3.jpg" alt="">
                  </div>
                  <h1>Branded Shoes</h1>
                  <span>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </span>
                  <p>$500.00</p>
                  <button>Add to cart</button>
              </div>
  
              <div class="card">
                  <div>
                      <img src="bu1.jpg" alt="">
                  </div>
                  <h1>Branded Shoes</h1>
                  <span>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </span>
                  <p>$500.00</p>
                  <button>Add to cart</button>
              </div>
  
              <div class="card">
                  <div>
                      <img src="bu4.jpg" alt="">
                  </div>
                  <h1>Branded Shoes</h1>
                  <span>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </span>
                  <p>$500.00</p>
                  <button>Add to cart</button>
              </div>
          </div>
      </section>
      <!------popular product end----------->
  
      <section class="trends">
          <div class="product-intro">
              <h1>Top <span>Trends</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, dignissimos.</p>
          </div>
          <div class="swiper mySwiper">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                      <img src="headphone1.png" alt="">
                  </div>
                  <div class="swiper-slide">
                      <img src="headphone2.png" alt="">
                  </div>
                  <div class="swiper-slide">
                      <img src="headphone3.png" alt="">
                  </div>
                  <div class="swiper-slide">
                      <img src="headphone1.png" alt="">
                  </div>
                  <div class="swiper-pagination"></div>
              </div>
      </section>
  
      <!-----fotter start----->
      <footer>
          <div>
              <h1>Apni <span>Dukan</span></h1>
              <p>Everything for kids world</p>
          </div>
          <div><i class="fa fa-facebook"></i>
              <i class="fa fa-instagram"></i>
              <i class="fa fa-whatsapp"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-pinterest"></i>
              <p><br>Design by Nitish Kumar</p>
          </div>
          <div><p>@2022 Copyright All Rights Reserved</p></div>
      </footer>
      <!-----fotter end----->
      <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      <script src="index.js"></script>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});