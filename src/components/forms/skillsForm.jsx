import { deleteSkill } from "../logic/skillsFunctions"

export default function SkillInputs( {changeData, data, state} ) {
  return <section className="forms__skills_bundle">
    {
      data.map(skill => {
        return (
          <div className="forms__skills_dinamic_input" key={skill.key}>
            <input type="text" name="text" onChange={e => changeData(e, skill.key, state)}/>
            <button className="forms--delete_dinamic" onClick={e => deleteSkill(skill.key, state)}>-</button>
          </div>
        )
      })
    }
  </section>
}