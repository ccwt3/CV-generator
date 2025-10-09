import HeaderInputs from "./input_components/headerInputs";
import JobInputs from "./input_components/jobInputs";
import EducationInputs from "./input_components/educationInputs";

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


  //* Toma el id del input y utiliza un parametro de setExperience que es el valor previo, lo itera y compara el id de los elementos, lo encuentra y simplemente cambia el valor que le pedimos
  //! buscar la manera de poder replicar el input para los demas

  function changeExperience(event, id) {
    setExperience(prev => prev.map(exp =>
        exp.key === id 
        ? {...exp, [event.target.name]: event.target.value}
        : exp
      )
    );
  }

  function changeExperienceBullet(event, id, bulletID) {
    setExperience(prev => prev.map(exp => {
      if (exp.key === id) {
        return {
          ...exp,
          bullet: exp.bullet.map(bul => {
            if (bul.key === bulletID) {
              return {...bul, text: event.target.value}
            }
            else {
              return bul;
            }
          })
        };
      }
      else {
        return exp;
      }
    }));
  }

  function addExperience(e) {
    setExperience(prev => [
      ...prev,
      {
        key: crypto.randomUUID(),
        company: 'Add info',
        position: '',
        place: '',
        period: '',
  
        bullet: [],
      }
    ]);
  }

  function addBullet(id) {
    setExperience(prev => prev.map(exp => {
      if (exp.key === id) {
        return {
          ...exp,
          bullet: [
            ...exp.bullet,
            {
              key: crypto.randomUUID(),
              text: 'set info',
            }
          ]
        };
      }
      else {
        return exp;
      }
    }));
  }

  // -------------------------
  function changeEducation(event, id) {
    setEducation(prev => prev.map(exp =>
        exp.key === id 
        ? {...exp, [event.target.name]: event.target.value}
        : exp
      )
    );
  }

  function changeEducationBullet(event, id, bulletID) {
    setEducation(prev => prev.map(exp => {
      if (exp.key === id) {
        return {
          ...exp,
          certifications: exp.certifications.map(bul => {
            if (bul.key === bulletID) {
              return {...bul, text: event.target.value}
            }
            else {
              return bul;
            }
          })
        };
      }
      else {
        return exp;
      }
    }));
  }

  function addEducation(e) {
    setEducation(prev => [
      ...prev,
      {
        key: crypto.randomUUID(),
        institution: 'Add info',
        place: '',
        major: '',
        gen: '',
  
        certifications: [],
      }
    ]);
  }

  function addEducationBullet(id) {
    setEducation(prev => prev.map(exp => {
      if (exp.key === id) {
        return {
          ...exp,
          certifications: [
            ...exp.certifications,
            {
              key: crypto.randomUUID(),
              text: 'set info',
            }
          ]
        };
      }
      else {
        return exp;
      }
    }));
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
          />

          <button onClick={e => addBullet(experienceData[i].key)}>Agregar bullet</button>
        
        </div>
      ))}
      <button onClick={addExperience}>Agregar Experiencia</button>

      <h2>Apartado de educacion</h2>
      {educationData.map((e, i) => (
        <div key={e.key}>

          <h3>aña #{i + 1}</h3>
          
          <EducationInputs 
            changeData={changeEducation} 
            changeBullet={changeEducationBullet} 
            data={educationData} idx={i}
          />

          <button onClick={e => addEducationBullet(educationData[i].key)}>certificate</button>
        
        </div>
      ))}
      <button onClick={addEducation}>add education</button>

    </>
  )
}