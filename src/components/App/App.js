import React from "react"
import ReactGA from "react-ga"

import "./App.scss"
import Welcome from "../Welcome"

function App() {
  ReactGA.initialize("UA-69829176-3")
  ReactGA.pageview(window.location.pathname + window.location.search)

  return (
    <div className="app">
      <Welcome />
    </div>
  )
}

export default App
