import { deleteSkill } from "../logic/skillsFunctions"

export default function SkillInputs( {changeData, data, state} ) {
  return <div className="skill__inputs">
    {
      data.map(skill => {
        return (
          <>
            <input type="text" placeholder="aña" name="text" onChange={e => changeData(e, skill.key, state)}/>
            <button onClick={e => deleteSkill(skill.key, state)}>teto</button>
          </>
        )
      })
    }
  </div>
}