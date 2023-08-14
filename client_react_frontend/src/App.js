import React, {useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experiece/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Slideshow from './components/slideshow/Slideshow'
import Login from './components/login/Login'
import './App.css'
{/*import { BrowserRouter, Routes, Route } from 'react-router-dom'*/}

const App = () => {


/* const [backendData, setBackendData] = useState([{}])

  useEffect(() => { /*fetching this api backend, respons after get os the res.json file in server*/
   
  /*fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
*/ 



  return (
  /*  <div>

    {(typeof backendData.users === 'undefined') ? (
      <p>
        Loading...
      </p>
    ): (
      backendData.users.map((user,i) => (
        <p key ={i}>
         {user}
        </p>
      ))
    )}

    </div> 

*/
    <>

        <Header />
        <Nav />
        <About />
        <Slideshow/>
        <Experience />
        <Portfolio />
        <Contact /> 
        <Footer />

    </>

  );
}

export default App