import { deleteEducationBullet } from "../logic/educationFunctions";

function RenderingInputs({ changer, data, generalID, set }) {
  const certification = data[generalID]?.certifications ?? [];
  
  return certification.map(cert => {
    return (
      <div className="forms__education_dinamic_input" key={cert.key}>
        <input
        type="text"
        name="certifications"
        onChange={e => changer(e, data[generalID].key, cert.key, set)}
        />

        <button className="forms__education_button forms--delete_dinamic" onClick={e => deleteEducationBullet(data[generalID].key, cert.key, set)}>-</button>
      </div>
    )
  });
}

export default function EducationInputs( {changeData, changeBullet, data, idx, setter} ) {
  return (
    <div className="forms__education_inputs">

      <div className="forms__label-input">
        <label htmlFor="education__institution">School name:</label>
        <input type="text" name="institution" id="education__institution" onChange={e => changeData(e, data[idx].key, setter)} />
      </div>
      
      <div className="forms__label-input">
        <label htmlFor="education__adress">City, Adress:</label>
        <input type="text" name="place" id="education__adress" onChange={e => changeData(e, data[idx].key, setter)} />
      </div>
      
      <div className="forms__label-input">
        <label htmlFor="education__degree">Degree:</label>
        <input type="text" name="major" onChange={e => changeData(e, data[idx].key, setter)} />
      </div>
      
      <div className="forms__label-input">
        <label htmlFor="education__gradDate">Graduation Date:</label>
        <input type="text" name="gen" onChange={e => changeData(e, data[idx].key, setter)} />
      </div>

      <div className="forms__label-input">
        <label htmlFor="education__bullet">Bullet Points</label>
        <RenderingInputs changer={changeBullet} data={data} generalID={idx} set={setter}/>
      </div>

    </div>
  )
}