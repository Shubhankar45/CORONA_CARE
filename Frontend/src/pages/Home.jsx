import React from 'react'
import Hero from "../components/Hero"
import Biography from "../components/Biography"
import Departmens from "../components/Departments"
import MessageForm from "../components/MessageForm"

const Home = () => {
  return <>

  <Hero title={"Welcome to MediCare Medical Consultancy | Your Trusted Healthcare provider" 
  }
  imageUrl={"/hero.png"}
  />
  <Biography/>
  <Departments/>
  <MessageForm/>

  </>
}

export default Home