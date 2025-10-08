import HeaderInputs from "./input_components/headerInputs";
import JobInputs from "./input_components/jobInputs";

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

  return (
    <>
      <HeaderInputs changeHeader={changeHeader}/>
      
      <h3>Apartado de trabajo</h3>
      
      <JobInputs changeData={changeExperience} changeBullet={changeExperienceBullet} data={experienceData}/>

      <h3>Seccion boton de prueba</h3>
      <button onClick={addExperience}>Agregar Experiencia</button>
      <button onClick={e => addBullet(experienceData[0].key)}>Agregar bullet</button>
    </>
  )
}