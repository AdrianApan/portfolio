import React, {useContext} from "react"

import "./ThemeToggler.scss"
import {ThemeContext} from "../../context/ThemeContext"

function ThemeToggler(toggleTheme) {
    const {theme} = useContext(ThemeContext)
    return (
        <div className="theme-toggler">
            <label id="switch" className="switch">
                <input
                    type="checkbox"
                    checked={theme === "light" ? true : false}
                    onChange={() => toggleTheme()}
                    id="slider"
                />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default ThemeToggler
