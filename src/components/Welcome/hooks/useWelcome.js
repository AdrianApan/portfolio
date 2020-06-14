import { useState, useEffect } from "react"
import projects from "../../../utils/projectsData"

function useWelcome() {
  const [showProjects, setShowProjects] = useState(false)
  const [projectsList, setProjectsList] = useState([])

  function handleClick(event) {
    event.preventDefault()
    setShowProjects(prevState => !prevState)
  }

  useEffect(() => {
    projects.map(project =>
      setProjectsList(prevProjects => [...prevProjects, project])
    )
  }, [])

  return {
    showProjects,
    projectsList,
    handleClick
  }
}

export default useWelcome
