import { deleteExperienceBullet } from "../logic/jobInputFunctions";

function RenderingInputs({ changer, data, generalID, set }) {
  const bullets = data[generalID]?.bullet ?? [];
  
  return bullets.map(bul => {
    return (
      <div className="forms__job_dinamic_input" key={bul.key}>
        <input
        type="text"
        name="bullet"
        placeholder="Dinamicos"
        onChange={e => changer(e, data[generalID].key, bul.key, set)}
        />

        <button className="forms__job_button forms--delete_dinamic" onClick={e => deleteExperienceBullet(data[generalID].key, bul.key, set)}>Delete</button>
      </div>
    )
  });
}

export default function JobInputs( {changeData, changeBullet, data, idx, setter} ) {
  return (
    <div className="forms__job_inputs">
      <input type="text" name="company" onChange={e => changeData(e, data[idx].key, setter)} />
      
      <input type="text" name="position" onChange={e => changeData(e, data[idx].key, setter)} />
      
      <input type="text" name="place" onChange={e => changeData(e, data[idx].key, setter)} />
      
      <input type="text" name="period" onChange={e => changeData(e, data[idx].key, setter)} />

      <RenderingInputs changer={changeBullet} data={data} generalID={idx} set={setter}/>
    </div>
  )
}