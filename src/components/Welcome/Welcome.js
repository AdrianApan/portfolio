import React, { useContext } from "react"
import { Container, Image, List, Icon } from "semantic-ui-react"

import "./Welcome.scss"
import { WelcomeText } from "./WelcomeStyles"
import { ThemeContext } from "../../context/ThemeContext"
import useWelcome from "./hooks/useWelcome"
import ThemeToggler from "../ThemeToggler"
import ProjectItem from "../ProjectItem"

function Welcome() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { showProjects, projectsList, handleClick } = useWelcome()

  return (
    <div className={`welcome-wrapper theme-${theme}`}>
      <Container fluid className="welcome">
        {ThemeToggler(toggleTheme)}

        <Image
          src="/images/aa_logo.png"
          size="small"
          centered
          className="logo"
        />

        {!showProjects ? (
          <WelcomeText>
            Browse my{" "}
            <a
              className="projects link-light"
              href="/"
              onClick={(event) => handleClick(event)}
              rel="noopener noreferrer"
            >
              PROJECTS
            </a>
            , visit my{" "}
            <a
              className="github link-light"
              href="https://github.com/AdrianApan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>{" "}
            profile, connect with me on{" "}
            <a
              className="linkedin link-light"
              href="https://www.linkedin.com/in/adrianapan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
            , send me a tweet on{" "}
            <a
              className="twitter linkedin link-dark"
              href="https://twitter.com/adrianapan"
              target="_blank"
              rel="noopener noreferrer"
            >
              TWITTER
            </a>{" "}
            or contact me via{" "}
            <a
              className="resume link-dark"
              href="mailto:mail@adrianapan.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              EMAIL
            </a>
            .
          </WelcomeText>
        ) : (
          <>
            <List horizontal id="menu">
              <List.Item>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  onClick={(event) => handleClick(event)}
                >
                  <Icon link name="home" size="large" />
                </a>
              </List.Item>
              <List.Item>
                <a
                  href="https://github.com/AdrianApan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="github" size="large" />
                </a>
              </List.Item>
              <List.Item>
                <a
                  href="https://www.linkedin.com/in/adrianapan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="linkedin" size="large" />
                </a>
              </List.Item>
              <List.Item>
                <a
                  href="https://twitter.com/adrianapan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="twitter" size="large" />
                </a>
              </List.Item>
              <List.Item>
                <a
                  href="mailto:mail@adrianapan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="envelope" size="large" />
                </a>
              </List.Item>
            </List>

            <List id="projects">
              {projectsList.map((item) => (
                <ProjectItem key={item.id} data={item} />
              ))}
            </List>
          </>
        )}
      </Container>
    </div>
  )
}

export default Welcome
