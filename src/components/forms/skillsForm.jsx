import { deleteSkill } from "../logic/skillsFunctions"

export default function SkillInputs( {changeData, data, state} ) {
  return <div className="forms__skills_bundle">
    {
      data.map(skill => {
        return (
          <div className="forms__skills_dinamic_input" key={skill.key}>
            <input type="text" placeholder="aña" name="text" onChange={e => changeData(e, skill.key, state)}/>
            <button onClick={e => deleteSkill(skill.key, state)}>teto</button>
          </div>
        )
      })
    }
  </div>
}