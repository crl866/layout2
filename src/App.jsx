import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="MainContainer">
      <div className="Section1">
        <div className="Box1"></div>
        <div className="Box2">
          <div className="InnerBox1"></div>
          <div className="InnerBox2"></div>
        </div>
        <div className="Box3"></div>
      </div>
      <div className="Section2">
        <div className="leftside"></div>
        <div className="rightside">
          <div className="Box5"></div>
          <div className="Box6"></div>
        </div>
      </div>
      <div className="Section3">
        <div className="Box7"></div>
        <div className="Box8"></div>
        <div className="Box9"></div>
        <div className="Box10"></div>
      </div>
    </div>
  )
}

export default App