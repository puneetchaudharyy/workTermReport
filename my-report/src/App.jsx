import './App.css'
import Header from './components/Header/Header.jsx'
import Intro from './components/Intro/Intro.jsx'
import Employer from './components/Employer/Employer.jsx'
import Goals from './components/Goals/Goals.jsx'
import Job from './components/Job/Job.jsx'
import Conclusions from './components/Conclusions/Conclusions.jsx'
import Acknowledgement from './components/Acknowledgement/Acknowledgement.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <div className="App">
      <Header />
      <Intro />
      <Employer />
      {/* <Goals /> */}
      {/* <Job /> */}
      {/* <Conclusions /> */}
      {/* <Acknowledgement /> */}
      <Footer />
    </div>
  )
}

export default App
