import React, {useContext} from "react"
import {List} from "semantic-ui-react"

import "./ProjectItem.scss"
import {ThemeContext} from "../../context/ThemeContext"
import setDevIcon from "../../utils/devIcons"

function ProjectItem(props) {
    const {name, url, tech} = props.data
    const {theme} = useContext(ThemeContext)
    return (
        <a className="project-link" href={url} target="_blank" rel="noopener noreferrer nofollow">
            <List.Item>
                <List.Header>
                    &rarr; {name}
                </List.Header>
                <List.Description>
                    {tech.map((item, i) => 
                        <div key={i} className="tech-item">
                            {setDevIcon(item, theme)}
                        </div>
                    )}
                </List.Description>
            </List.Item>
        </a>
    )
}

export default ProjectItem
