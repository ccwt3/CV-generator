import { useState } from "react";
// estilos
import "./App.css";
import "./styles/experience.css"
import "./styles/education.css"
// componentes
import HeaderInfo from "./components/header";
import Experience from "./components/experience";
import Education from "./components/education";
import Skills from "./components/skills";

function App() {
  const [headerData, setHeaderData] = useState(
    {
      name: "Omar Alejandro Tlapa Esteban",
      direction: "Veracruz, México",
      linkedIn: "https://www.linkedin.com/in/oate/",
      phone: "111-1111-2222",
      email: "cacawat3gd@gmail.com",
      description:
        `I've been learning web development since february of 2025, starting with the path of "The Odin Project" and currently learning React and NodeJS`,
    }
  )

  const [experience, setExperience] = useState([
    {
      company: 'CV creator',
      position: 'Solo developer',
      place: 'México',
      period: 'September 2025 - September 2025',

      bullet: [
        'This project was an assigment by TheOdinProject',
        'This project helped me learn react components and how to structure data in a good way'
      ]
    },
    {
      company: 'CV Sexo',
      position: 'Solo developer',
      place: 'México',
      period: 'September 2025 - September 2025',

      bullet: [
        'Damn mami i just wanna tun tuku tun, gotcha tun tuku tun',
      ]
    }
  ])

  const [education, setEducation] = useState([
    {
      institution: 'TecNM',
      place: 'Mexico',
      major: 'Software Engineering',
      gen: 'Currently studing',
      
      certifications: [
        'Excel certification', 'coso'
      ]
    }
  ])

  const [skills, setSkills] = useState(
    [
      'Native Spanish speaker, C1 English level and A2 at Greek',
      '1200 ELO at chess.com',
      'Poker player'
    ]
  )

  return (
    <>
      <HeaderInfo data={headerData} />
      <Experience data={experience} />
      <Education data={education} />
      <Skills data={skills} />
    </>
  );
}

export default App;
