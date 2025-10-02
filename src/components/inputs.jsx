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

  return (
    <>
      <input type="text" name="name" onChange={changeHeader}/>
      <input type="text" name="direction" onChange={changeHeader}/>
      <input type="text" name="linkedIn" onChange={changeHeader}/>
      <input type="text" name="phone" onChange={changeHeader}/>
      <input type="text" name="email" onChange={changeHeader}/>
      <input type="text" name="description" onChange={changeHeader}/>

      <h3>Apartado de trabajo</h3>

      <input type="text" name="company" onChange={e => 
        changeExperience(e, experienceData[0].key)
      }/>
      
      <input type="text" name="position" onChange={e => 
        changeExperience(e, experienceData[0].key)}
      />
      
      <input type="text" name="place" onChange={e => 
        changeExperience(e, experienceData[0].key)}
      />
      
      <input type="text" name="period" onChange={e => 
        changeExperience(e, experienceData[0].key)}
      />

      <input type="text" name="bullet" onChange={e =>
         changeExperienceBullet(
          e, 
          experienceData[0].key, 
          experienceData[0].bullet[0].key
        )}
      />

      <input type="text" name="bullet" onChange={e =>
         changeExperienceBullet(
          e, 
          experienceData[0].key, 
          experienceData[0].bullet[1].key
        )}
      />

    </>
  )
}