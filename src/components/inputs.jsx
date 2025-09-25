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

  function changeExperience(event) {
    console.log("se ejecuta")
    setExperience({
      ...experienceData,
      [event.target.name] : event.target.value
    })
  }

  //! AND ADD KEYS

  return (
    <>
      <input type="text" name="name" onChange={changeHeader}/>
      <input type="text" name="direction" onChange={changeHeader}/>
      <input type="text" name="linkedIn" onChange={changeHeader}/>
      <input type="text" name="phone" onChange={changeHeader}/>
      <input type="text" name="email" onChange={changeHeader}/>
      <input type="text" name="description" onChange={changeHeader}/>

      <h3>Apartado de trabajo</h3>

      <input type="text" name="company" onChange={changeExperience}/>
    </>
  )
}