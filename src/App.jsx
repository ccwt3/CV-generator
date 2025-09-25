import { useState } from "react";
// styles
import "./App.css";
import "./styles/experience.css"
import "./styles/education.css"
// components
import HeaderInfo from "./components/header";
import Experience from "./components/experience";
import Education from "./components/education";
import Skills from "./components/skills";
import AllTheInputs from "./components/inputs";

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
      key: crypto.randomUUID(),
      company: 'CV creator',
      position: 'Solo developer',
      place: 'México',
      period: 'September 2025 - September 2025',

      bullet: [
        {
          key: crypto.randomUUID(),
          text: 'This project was an assigment by TheOdinProject'
        },
        {
          key: crypto.randomUUID(),
          text: 'This project helped me learn how structure things'
        }
      ]
    },
    {
      key: crypto.randomUUID(),
      company: 'CV Sexo',
      position: 'Solo developer',
      place: 'México',
      period: 'September 2025 - September 2025',

      bullet: [
        {
          key: crypto.randomUUID(),
          text: 'Damn mami'
        }
      ]
    }
  ])

  const [education, setEducation] = useState([
    {
      key: crypto.randomUUID(),
      institution: 'TecNM',
      place: 'Mexico',
      major: 'Software Engineering',
      gen: 'Currently studing',
      
      certifications: [
        {
          key: crypto.randomUUID(),
          text: 'Excel certificate'
        },
        {
          key: crypto.randomUUID(),
          text: 'Another certificate'
        }
      ]
    }
  ])

  const [skills, setSkills] = useState(
    [
      {
        key: crypto.randomUUID(),
        text: 'Native Spanish speaker, C1 English level and A2 at Greek'
      },
      {
        key: crypto.randomUUID(),
        text: '1200 ELO at chess.com'
      },
      {
        key: crypto.randomUUID(),
        text: 'Poker player'
      }
    ]
  )

  return (
    <>
      <AllTheInputs 
        setHeader={setHeaderData}
        headerData={headerData}  

        setExperience={setExperience}
        experienceData={experience}

        setEducation={setEducation}
        educationData={education}

        setSkills={setSkills}
        skillsData={skills}
      />

      <HeaderInfo data={headerData} />
      <Experience data={experience} />
      <Education data={education} />
      <Skills data={skills} />
    </>
  );
}

export default App;
