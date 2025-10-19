import HeaderInputs from "./forms/headerForm.jsx";
import JobInputs from "./forms/jobForm.jsx";
import EducationInputs from "./forms/educationForm.jsx";
import {changeExperience, changeExperienceBullet, addExperience, addBullet} from "./logic/jobInputFunctions.js"
import {changeEducation, changeEducationBullet, addEducation, addEducationBullet } from "./logic/educationFunctions.js";


export default function AllTheInputs(
  {
    setHeader,
    headerData,
    setExperience,
    experienceData,
    setEducation,
    educationData,
    setSkills,
    skillsData
  }
) {

  function changeHeader(event) {
    setHeader({
      ...headerData,
      [event.target.name] : event.target.value
    })
  }

  return (
    <>
      <h2>Apartado del header</h2>
      <HeaderInputs changeHeader={changeHeader}/>
      
      <h2>Apartado de trabajo</h2>
      {experienceData.map((e, i) => (
        <div key={e.key}>

          <h3>Experience #{i + 1}</h3>
        
          <JobInputs 
            changeData={changeExperience} 
            changeBullet={changeExperienceBullet} 
            data={experienceData} idx={i}
            setter={setExperience}
          />

          <button onClick={e => addBullet(experienceData[i].key, setExperience)}>Agregar bullet</button>
        
        </div>
      ))}
      <button onClick={e => addExperience(e, setExperience)}>Agregar Experiencia</button>

      <h2>Apartado de educacion</h2>
      {educationData.map((e, i) => (
        <div key={e.key}>

          <h3>aña #{i + 1}</h3>
          
          <EducationInputs 
            changeData={changeEducation} 
            changeBullet={changeEducationBullet} 
            data={educationData} idx={i}
            setter={setEducation}
          />

          <button onClick={e => addEducationBullet(educationData[i].key, setEducation)}>certificate</button>
        
        </div>
      ))}
      <button onClick={e => addEducation(e, setEducation)}>add education</button>

    </>
  )
}