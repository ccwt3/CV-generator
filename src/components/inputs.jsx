import HeaderInputs from "./forms/headerForm.jsx";
import JobInputs from "./forms/jobForm.jsx";
import EducationInputs from "./forms/educationForm.jsx";
import SkillInputs from "./forms/skillsForm.jsx";
import {changeExperience, changeExperienceBullet, addExperience, addBullet, deleteExperience} from "./logic/jobInputFunctions.js"
import {changeEducation, changeEducationBullet, addEducation, addEducationBullet, deleteEducation } from "./logic/educationFunctions.js";
import { changeSkills, addSkill } from "./logic/skillsFunctions.js";


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
    <aside className="forms">
    {/*//*  ---------------- HEADER FIELDS ----------------- */}
      <h2>Apartado del header</h2>
      <HeaderInputs changeHeader={changeHeader}/>
      
    {/*//*  ---------------- JOB FIELDS ----------------- */}
      <h2>Apartado de trabajo</h2>
      {experienceData.map((e, i) => (
        <section key={e.key} className="forms__job_bundle">

          <h3>Experience #{i + 1}</h3>
        
          <JobInputs 
            changeData={changeExperience} 
            changeBullet={changeExperienceBullet} 
            data={experienceData} idx={i}
            setter={setExperience}
          />

          <button className="forms__job_button forms--add_dinamic" onClick={e => addBullet(experienceData[i].key, setExperience)}>Agregar bullet</button>
          
          <button className="forms__job_button forms--delete_job" onClick={e => deleteExperience(experienceData[i].key, setExperience)}>Eliminar Experiencia</button>
        
        </section>
      ))}

      <button className="forms__add_job_button" onClick={e => addExperience(e, setExperience)}>Agregar Experiencia</button>

    {/*//*  ---------------- EDUCATION FIELDS ----------------- */}
      <h2>Apartado de educacion</h2>
      {educationData.map((e, i) => (
        <section className="forms__education_bundle" key={e.key}>

          <h3>aña #{i + 1}</h3>
          
          <EducationInputs 
            changeData={changeEducation} 
            changeBullet={changeEducationBullet} 
            data={educationData} idx={i}
            setter={setEducation}
          />

          <button className="forms__education_button forms--add_dinamic" onClick={e => addEducationBullet(educationData[i].key, setEducation)}>certificate</button>
          
          <button className="forms__education_button forms--delete_education" onClick={e => deleteEducation(educationData[i].key, setEducation)}>Delete education</button>
        </section>
      ))}
      <button className="forms__add_education_button" onClick={e => addEducation(e, setEducation)}>add education</button>

    {/*//*  ---------------- SKILL FIELDS ----------------- */}
      <h2>Skills</h2>
      <SkillInputs 
        changeData={changeSkills}
        data={skillsData}
        state={setSkills}
      />

      <button className="forms__add_skill_button" onClick={e => addSkill(e, setSkills)}>add skill</button>
    </aside>
  )
}