import { useState, useEffect } from "react"
import { useSpring } from "react-spring"
import projects from "../../../utils/projectsData"

function useWelcome() {
  const [showProjects, setShowProjects] = useState(false)
  const [projectsList, setProjectsList] = useState([])

  const projectsProps = useSpring({
    transition: "opacity 0.15s",
    opacity: showProjects ? 1 : 0
  })
	
  const menuProps = useSpring({
    marginLeft: showProjects ? 0 : -500
  })

  function handleClick(event) {
    event.preventDefault()
    setShowProjects(prevState => !prevState)
  }

  useEffect(() => {
    projects.map(project => setProjectsList(prevProjects => [...prevProjects, project]))
  }, [])

  return {
    showProjects,
    projectsList,
    projectsProps,
    menuProps,
    handleClick
  }
}

export default useWelcome