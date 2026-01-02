import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Intro from './components/Intro.jsx'
import Employer from './components/Employer.jsx'
import Goals from './components/Goals.jsx'
import Job from './components/Job.jsx'
import Conclusions from './components/Conclusions.jsx'
import Acknowledgements from './components/Acknowledgement.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Header />
      <Intro />
      <Employer />
      <Goals />
      <Job />
      <Conclusions /> */}
      {/* <Acknowledgements /> */}
      <Footer />
    </div>
  )
}

export default App
