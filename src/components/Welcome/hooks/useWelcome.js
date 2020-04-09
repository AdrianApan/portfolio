import {useState, useEffect} from "react"

import projects from "../../../utils/projectsData"

function useWelcome() {
    const [showProjects, setShowProjects] = useState(false)
    const [projectsList, setProjectsList] = useState([])
    
    useEffect(() => {
        projects.map(project => setProjectsList(prevProjects => [...prevProjects, project]))
    }, [])
    
    return {
        showProjects,
        setShowProjects,
        projectsList
    }
}

export default useWelcome