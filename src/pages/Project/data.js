import "./index.scss"
import { Coding_Quiz, Git_Cooking, Note_Taker, Shady_Market_Place, Password_Generator, Web_The_Builder, Weather_Application } from "./image/index.js"

const project = [
    {
        name: "Git Cooking",
        image: Git_Cooking,
        alt: "Screenshot of the project called 'GitCooking'",
        deployed: "https://nmbeilke.github.io/Git-Cooking/",
        github: "https://github.com/nmbeilke/Git-Cooking",
        description: "Don't know what to make for dinner? This is an application is just for you! This web application generates a random recipe and drink pairing from your choosing!",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "API"]
    },
    {
        name: "Shady Market Place",
        image: Shady_Market_Place,
        alt: "Screenshot of the project called 'Shady Market Place'",
        deployed: "https://e-commerce-store-w-stripe-2022.herokuapp.com/api/categories",
        github: "https://github.com/DavisRansom/E-Commerce-Marketplace",
        description: "The Shady Marketplace is a complete, mock E-commerce application. The application creates a E-shopping site through which users can browse, purchase, or even sell various 'shady' products (given that they sign up through our website).",
        skills: ["JavaScript", "Bootstrap", "API", "Heroku", "Handlebars"]
    },
    {
        name: "Note Taker",
        image: Note_Taker,
        alt: "Screenshot of the project called 'Note Taker'",
        deployed: "https://notetakerforbootcamp-app.herokuapp.com/",
        github: "https://github.com/HCTyler/NoteTaker",
        description: "This web application allows the user to store simple notes with to a simple JSON format database. This program uses vanilla JavaScript front end with an Express.js/Node.js back end to store and retrieve notes.",
        skills: ["JavaScript", "Express.js", "Node.js", "Heroku"],
    },
    {
        name: "Coding Quiz",
        image: Coding_Quiz,
        alt: "Screenshot of the project called 'Code Quiz'",
        deployed: "https://hctyler.github.io/Code-Quiz/",
        github: "https://github.com/HCTyler/Code-Quiz",
        description: "A simple timed quiz web application that challenges you with various laboratory related questions. How many of the questions can you get right?",
        skills: ["HTML", "CSS", "JavaScript"],
    },
    // {
    //     name:"Web The Builder",
    //     image:Web_The_Builder,
    //     alt:"Screenshot of the project called 'Web The Builder'",
    //     deployed:"https://pacific-sands-33682.herokuapp.com/",
    //     github:"https://github.com/HCTyler/Web-the-Builder",
    //     description:"A mock e-commerce website that allows users to create an account, add and remove items in their cart, and purchase a product. This site also provides ",
    //     skills:["MongoDB Atlas", "React", "Express","Node","Heroku"]
    // },
    // {
    //     name:"Weather Dashbord",
    //     image:Weather_Application,
    //     alt:"Screenshot of the project called 'Weather Dashbord'",
    //     deployed:"https://hctyler.github.io/Weather_Dashboard/",
    //     github:"https://github.com/HCTyler/Weather_Dashboard",
    //     description:"This application implements the openweathermap API to present the current weather and a forecast for a user input city name. This saves the previously searched cities as a button below the search region for quick reaccess.",
    //     skills:["API","Bootstrap","JavaScript"]
    // },
    {
        name: "Password Generator",
        image: Password_Generator,
        alt: "Screenshot of the project called 'Password Generator'",
        deployed: "https://hctyler.github.io/PasswordGenerator/",
        github: "https://github.com/HCTyler/PasswordGenerator",
        description: "This application uses javascript fundamentals to generate a random password with some given optional criterias: i.e length, capitalization, numeric, and special characters. The generated password is then displayed within the page for the user.",
        skills: ["HTML", "CSS", "JavaScript"],
    },

]

export default project