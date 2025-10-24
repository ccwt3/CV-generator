import { deleteExperienceBullet } from "../logic/jobInputFunctions";

function RenderingInputs({ changer, data, generalID, set }) {
  const bullets = data[generalID]?.bullet ?? [];
  
  return bullets.map(bul => {
    return (
      <div className="forms__job_dinamic_input" key={bul.key}>
        <input
        type="text"
        name="bullet"
        onChange={e => changer(e, data[generalID].key, bul.key, set)}
        />

        <button className="forms__job_button forms--delete_dinamic" onClick={e => deleteExperienceBullet(data[generalID].key, bul.key, set)}>-</button>
      </div>
    )
  });
}

export default function JobInputs( {changeData, changeBullet, data, idx, setter} ) {
  return (
    <div className="forms__job_inputs">

      <div className="forms__label-input">
        <label htmlFor="job__company">Organization:</label>
        <input type="text" name="company" id="job__company" onChange={e => changeData(e, data[idx].key, setter)} />
      </div>
      
      <div className="forms__label-input">
        <label htmlFor="job__position">Position title:</label>
        <input type="text" name="position" id="job__position" onChange={e => changeData(e, data[idx].key, setter)} />
      </div>
      
      <div className="forms__label-input">
        <label htmlFor="job__city">City, Adress:</label>
        <input type="text" name="place" onChange={e => changeData(e, data[idx].key, setter)} />
      </div>
      
      <div className="forms__label-input">
        <label htmlFor="job__period">Period:</label>
        <input type="text" name="period" onChange={e => changeData(e, data[idx].key, setter)} />
      </div>
      
      <div className="forms__label-input">
        <label htmlFor="job__bullet">Bullet points:</label>
        <RenderingInputs changer={changeBullet} data={data} generalID={idx} set={setter}/>
      </div>
      
    </div>
  )
}