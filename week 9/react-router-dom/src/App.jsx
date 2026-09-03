import { useState } from 'react'

import{ BrowserRouter, Routes, Route,Link, Outlet} from "react-router-dom"

import './App.css'

function App() {


  return (
    <div style={{margin:"0 100px"}}>

    <BrowserRouter>
      <Routes >

        <Route path="/" element={<Layout/>}>
          <Route path='/Index' element={<Index/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

function Layout(){

  return(
    <>
    <TopBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}


function TopBar(){

  return(
    <>
    <div style={{display:'flex',justifyContent:'space-between',padding:"0 100px"}}>
    <div><Link to="/Index"><img src="https://zerodha.com/static/images/logo.svg" alt="Zerodha" width="250px"/></Link></div>
    <div >
      <Link to="/signup"style={{paddingLeft:"25px",fontSize:"25px",color:"grey"}}>SignUp</Link>
      <Link to="/about"style={{paddingLeft:"25px",fontSize:"25px",color:"grey"}}>About</Link>
      <Link to="/products"style={{paddingLeft:"25px",fontSize:"25px",color:"grey"}}>Products</Link>

    </div>

    </div>
    
    </>
  )

}

function Index(){
return(
  <div style={{display:'flex',justifyContent:"center"}}>
    <div style={{display:'flex',flexDirection:'column',justifyContent:"space-between"}}>
  
  <img src="https://zerodha.com/static/images/landing.svg" width="500px" />
  
    <center><h2>Invest in everything</h2></center>
      <p>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>

      <center><button style={{padding:"10px",width:"150px" ,backgroundColor:"#3471eb",color:"white",fontWeight:"700"}}>Sign up for free</button></center>
    <div style={{display:'flex',justifyContent:"space-between"}}>
    <div> <br /> <br />
      <h2>Trust with confidence</h2> <br /> 
<h3>Customer-first always</h3> <br /> <br />
That's why 1.6+ crore customers trust Zerodha with ~ ₹6 <br />
lakh crores of equity investments, making us India’s <br />
largest broker; contributing to 15% of daily retail <br />
exchange volumes in India.
<br /><br />
<h3>No spam or gimmicks</h3>
No gimmicks, spam, "gamification", or annoying push <br />
notifications. High quality apps that you use at your <br />
pace, the way you like. Our philosophies.
<br /> <br />
<h3>The Zerodha universe</h3>
Not just an app, but a whole ecosystem. Our investments <br />
 in 30+ fintech startups offer you tailored services <br />
 specific to your needs.
 <br /> <br />
<h3> Do better with money</h3>
With initiatives like Nudge and Kill Switch, we don't just <br />
facilitate transactions, but actively help you do better <br />
 with your money. <br /> <br /> <br />

    </div>
    <br /> <br />
    <img src="https://zerodha.com/static/images/ecosystem.png" width="600px" height="600px"  />
    </div>
</div>
  </div>
)
}


function Signup(){

  return(
    <center>
      <div style={{display:"flex",flexDirection:"column",margin:"0px 100px"}}>
      <br /> 

      <div>
      <h1>Open a free demat and trading account online</h1>

      <h3>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h3>
    </div>

    <div style={{display:'flex',justifyContent:"space-around"}}>
    <img src="https://zerodha.com/static/images/account_open.svg" width="600px" />
    <div>
      <h2>Signup now</h2>
      Or track your existing application
      <br /><br />
      <input type="number" placeholder='Enter mobile number' style={{padding:"10px"}} />
      <br /> <br />
      <button style={{padding:"10px",width:"150px" ,backgroundColor:"#3471eb",color:"white",fontWeight:"700"}}>Get OTP</button>
    </div>
    </div>
    <div>
<h1>Already have a demat account?</h1>
<h3>Move your holdings to Zerodha and we'll cover your transfer costs, up to ₹500, learn more </h3>
    </div>

    <div style={{margin:"100px"}}>
      <h2>Investment options with Zerodha demat account</h2>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
      <div style={{display:'flex',padding:"25px"}}>
        <img src="https://zerodha.com/static/images/stocks-acop.svg"  />
        <p>
          <b>Stocks</b> <br />
Invest in all exchange-listed securities
        </p>
      </div>
      <div style={{display:'flex',padding:"25px"}}>
        <img src="https://zerodha.com/static/images/mf-acop.svg"  />
        <p>
          <b>IPO</b> <br />
Apply to the latest IPOs instantly via UPI
        </p>
      </div>
      <div style={{display:'flex',padding:"25px"}}>
        <img src="https://zerodha.com/static/images/ipo-acop.svg" alt="image" />
        <p>
          <b>Mutual funds</b> <br />
Invest in commission-free direct mutual funds
        </p>
      </div>
      <div style={{display:'flex',padding:"25px"}}>
        <img src="https://zerodha.com/static/images/fo-acop.svg"  />
        <p>
          <b>Futures & options</b> <br />
Hedge and mitigate market risk through simplified F&O trading
        </p>

      </div>

      </div>
    </div>
    </div >
    </center>
  )


}

function About(){
  return (
    <>
    <center>
      <div>
        <h2 style={{margin:"100px"}}>We pioneered the discount broking model in India. <br />
Now, we are breaking ground with our technology.</h2>

      </div>

      <div style={{display:"flex",justifyContent:"space-between",margin:"0 200px",fontSize:"18px"}}>
        <p>
        We kick-started operations on the 15th of August, 2010 <br />
        with the goal of breaking all barriers that traders and <br />
         investors face in India in terms of cost, support, and <br />
         technology. We named the company Zerodha, a <br />
         combination of Zero and "Rodha", the Sanskrit word for <br />
          barrier.
          <br />

Today, our disruptive pricing models and in-house <br /> technology have made us the biggest stock broker in <br />
 India. <br />

Over 1.6+ crore clients place billions of orders every year <br /> 
through our powerful ecosystem of investment <br />
 platforms, contributing over 15% of all Indian retail <br />
  trading volumes.
        </p>
<br />
        <p>
In addition, we run a number of popular open online <br />
educational and community initiatives to empower retail <br />
 traders and investors.
 <br />

Rainmatter, our fintech fund and incubator, has invested <br />
 in several fintech startups with the goal of growing the <br />
  Indian capital markets.
<br />

And yet, we are always up to something new every day. <br />
Catch up on the latest updates on our blog or see what <br />
the media is saying about us or learn more about our <br />
business and product philosophies.
<br />
        </p>

      </div>

      <div style={{display:"flex",justifyContent:"space-between",margin:"100px 200px",fontSize:"18px"}}>
      <div>
        <img src="https://zerodha.com/static/images/nithin-kamath.jpg" style={{height:"300px",borderRadius:"300px"}} />
        <p>
          <b>Nithin Kamath</b> <br />
              Founder, CEO
        </p>
      </div>

      <div>
        <p>
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br /> <br />
           hurdles he faced during his decade long stint as a trader. Today, <br />  <br />
            Zerodha has changed the landscape of the Indian broking industry. <br /> <br />
            <br /> <br />

He is a member of the SEBI Secondary Market Advisory Committee <br /> <br />
 (SMAC) and the Market Data Advisory Committee (MDAC). <br />
 <br />

Playing basketball is his zen. <br /> <br />

Connect on Homepage / TradingQnA / Twitter <br />
        </p>
      </div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:"1fr 1fr 1fr"}}>

        <div style={{margin:"25px"}}>
          <img src="https://zerodha.com/static/images/Nikhil.jpg" style={{width:"300px",borderRadius:"300px"}} />
          <p>
            <b>Nikhil Kamath</b> <br />
            Co-founder & CFO
          </p>
        </div>
        <div style={{margin:"25px"}}>
          <img src="https://zerodha.com/static/images/Kailash.jpg" style={{width:"300px",borderRadius:"300px"}} />
          <p>
            <b>Dr. Kailash Nadh</b> <br />
                CTO </p>    
        </div>
        <div style={{margin:"25px"}}>
          <img src="https://zerodha.com/static/images/Venu.jpg" style={{width:"300px",borderRadius:"300px"}} />
          <p>
            <b>Venu Madhav</b> <br />
                COO
          </p>
        </div>
        <div style={{margin:"25px"}}>
          <img src="https://zerodha.com/static/images/Seema.jpg" style={{width:"300px",borderRadius:"300px"}} />
          <p>
           <b> Seema Patil</b> <br />
                  Director
          </p>
        </div>
        <div style={{margin:"25px"}}>
          <img src="https://zerodha.com/static/images/karthik.jpg" style={{width:"300px",borderRadius:"300px"}} />
          <p><b>Karthik Rangappa</b> <br />
        Chief of Education</p>
        </div>
        <div style={{margin:"25px"}}>
          <img src="https://zerodha.com/static/images/Austin.jpg" style={{width:"300px",borderRadius:"300px"}} />
          <p>
            <b>Austin Prakesh</b> <br />
              Director Strategy
          </p>
        </div>


      </div>
    </center>
    </>
  )

}

function Products(){

  return (
    <center style={{margin:"100px"}}>

      <p style={{margin:"100px"}}>
        <h1>Zerodha Products</h1>
Sleek, modern, and intuitive trading platforms <br /> <br />

Check out our investment offerings →
      </p>

      <div style={{display:"flex",justifyContent:"space-between"}}>
        <img src="https://zerodha.com/static/images/products-kite.png" alt="" />
        <p>
          <h2>Kite</h2>
Our ultra-fast flagship trading platform with <br />
 streaming market data, advanced charts, an <br />
  elegant UI, and more. Enjoy the Kite <br />
   experience seamlessly on your Android and <br />
    iOS devices. <br /> <br />
    <div>
          <img src="https://zerodha.com/static/images/google-play-badge.svg" alt="" /> <br /> <br />
          <img src="https://zerodha.com/static/images/appstore-badge.svg" alt="" />
        </div>

        </p>
        
      </div>



    </center>
  )

}

function Footer(){
  return <div style={{display:'flex',justifyContent:"space-evenly"}}>
<div>
  <img src="https://zerodha.com/static/images/logo.svg" width="150px"/>
  <br />
  <p>© 2010 - 2026, Zerodha Broking Ltd. <br />
    All rights reserved.</p> <br />
    <div style={{display:'flex',justifyContent:"space-evenly"}}>
    <img src="https://zerodha.com/static/images/x-twitter.svg" width="50px"/>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/3840px-Facebook_f_logo_%282021%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail" width="50px" />
    <img src="https://png.pngtree.com/element_our/sm/20180630/sm_5b37de3263964.jpg" width="50px" />
    <img src="https://img.magnific.com/premium-vector/linkedin-logo_578229-227.jpg?semt=ais_hybrid&w=740&q=80" width="50px" />
    </div>

</div>
  <div>
      <h3>Account</h3>
      <p>
        Open demat account <br /> <br />
        Minor demat account <br /> <br />
        NRI demat account <br /> <br />
        HUF demat account  <br />  <br />
        Commodity <br /> <br />
      </p>
    </div>

    <div>

     <h3>Support</h3>
        Contact us <br /> <br />
        Support portal <br /> <br />
        How to file a complaint? <br /> <br />
        Status of your complaints <br /> <br />
        Bulletin <br /> <br />
        Circular <br /> <br />
    </div>

    <div>
      <h3>Company</h3>
          About<br /> <br />
          Philosophy<br /> <br />
          Press & media<br /> <br />
          Careers<br /> <br />
          Zerodha Cares (CSR)<br /> <br />
          Zerodha.tech<br /> <br />
    </div>
    <div>
      <h3>Quick links</h3>
          Upcoming IPOs<br /> <br />
          Brokerage charges<br /> <br />
          Market holidays<br /> <br />
          Economic calendar<br /> <br />
          Calculators<br /> <br />
          Markets<br /> <br />
    </div>


  </div>
}





export default App
