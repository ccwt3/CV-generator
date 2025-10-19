export default function SkillInputs( {changeData, data, state} ) {
  return <div className="skill__inputs">
    {
      data.map(skill => 
        <input type="text" placeholder="aña" onChange={e => changeData(e, skill, state)}/>
      )
    }
  </div>
}