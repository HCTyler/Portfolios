import React from "react"
import { GithubIcon, WebsiteIcon} from "../../components/Icons"
import {
    Coding_Quiz, Git_Cooking, Note_Taker, Password_Generator, Web_The_Builder} from "./image"
import "./index.scss"


function Data() {

return (
<>
    <article class="project">
        <header>Git Cooking</header>
        <div class="projectPage">
            <a href="https://nmbeilke.github.io/Git-Cooking/">
                <img src={Git_Cooking} alt="Screenshot of the project called 'GitCooking'" />
            </a>
            <p>This is a group project done in the coding bootcamp. This is an application uses two APIs: Edamam and Cocktail DB to generate a random recipe and drink pairing.
            </p>
            <div className="projectButtons">
                <button><a href="https://github.com/nmbeilke/Git-Cooking">
                    <img src={GithubIcon} alt="Github icon" />
                    GitHub Page</a>
                </button>
                <button><a href="https://nmbeilke.github.io/Git-Cooking/">
                    <img src={WebsiteIcon} alt="website icon" />
                    Deployed Site</a>
                </button>
            </div>
        </div>
    </article>

    <article class="project">
        <header>Web the Builder</header>
        <div class="projectPage">
            <a href="https://pacific-sands-33682.herokuapp.com/">
                <img src={Web_The_Builder} alt="Screenshot of the project called 'Web the Builder'" />
            </a>
            <p>This is a group project done in the coding bootcamp that allows the user to log in, purchase a product and have the product save in a cart. This project uses MongoDB Atlas, React, Express, Node, and Heorku to deploy.
            </p>
            <div className="projectButtons">
                <button><a href="https://github.com/HCTyler/Web-the-Builder">
                    <img src={GithubIcon} alt="Github icon" />
                    GitHub Page</a>
                </button>
                <button><a href="https://pacific-sands-33682.herokuapp.com/">
                    <img src={WebsiteIcon} alt="website icon" />
                    Deployed Site</a>
                </button>
            </div>
        </div>
    </article>

    <article class="project">
        <header>Coding Quiz</header>
        <div class="projectPage">
            <a href="https://hctyler.github.io/Code-Quiz/">
                <img src={Coding_Quiz} alt="Screen shot of the project called 'Code Refactor'" /></a>
            <p>This application is a timed quiz program that uses Javascript fundamentals that stores highscores using local storage.
            </p>
            <div className="projectButtons">
                <button><a href="https://github.com/HCTyler/Code-Quiz">
                    <img src={GithubIcon} alt="Github icon" />
                    GitHub Page</a>
                </button>
                <button><a href="https://hctyler.github.io/Code-Quiz/">
                    <img src={WebsiteIcon} alt="website icon" />
                    Deployed Site</a>
                </button>
            </div>

        </div>
    </article>

    <article class="project">
        <header>Password Generator</header>
        <div class="projectPage">
            <a href="https://hctyler.github.io/PasswordGenerator/">
                <img src={Password_Generator} alt="Screen shot of the project called 'Code Refactor'" /></a>
            <p>This application uses javascript fundamentals to generate a random password with some given optional criterias: i.e length, capitalization, numeric, and special characters. The generated password is then displayed within the page for the user.
            </p>
            <div className="projectButtons">
                <button><a href="https://github.com/HCTyler/PasswordGenerator">
                    <img src={GithubIcon} alt="Github icon" />
                    GitHub Page</a>
                </button>
                <button><a href="https://hctyler.github.io/PasswordGenerator/">
                    <img src={WebsiteIcon} alt="website icon" />
                    Deployed Site</a>
                </button>
            </div>
        </div>
    </article>

    <article class="project">
        <header>Note Taker</header>
        <div class="projectPage">
            <a href="https://notetakerforbootcamp-app.herokuapp.com/">
                <img src={Note_Taker} alt="Screen shot of the project called 'Code Refactor'" />
            </a>
            <p>This Note-taker app allows users to create, save and delete reminder notes. This application uses an Express.js as a backend, and save/retrieve note data from a JSON file.
            </p>
            <div className="projectButtons">
                <button><a href="https://github.com/HCTyler/NoteTaker">
                    <img src={GithubIcon} alt="Github icon" />
                    GitHub Page</a>
                </button>
                <button><a href="https://notetakerforbootcamp-app.herokuapp.com/">
                    <img src={WebsiteIcon} alt="website icon" />
                    Deployed Site</a>
                </button>
            </div>
        </div>
    </article>

</>
)}

export default Data



    