import { deleteEducationBullet } from "../logic/educationFunctions";

function RenderingInputs({ changer, data, generalID, set }) {
  const certification = data[generalID]?.certifications ?? [];
  
  return certification.map(cert => {
    return (
      <div className="forms__education_dinamic_input" key={cert.key}>
        <input
        type="text"
        name="certifications"
        placeholder="Dinamicos"
        onChange={e => changer(e, data[generalID].key, cert.key, set)}
        />

        <button className="forms__education_button forms--delete_dinamic" onClick={e => deleteEducationBullet(data[generalID].key, cert.key, set)}>D</button>
      </div>
    )
  });
}

export default function EducationInputs( {changeData, changeBullet, data, idx, setter} ) {
  return (
    <div className="forms__education_inputs">
      <input type="text" name="institution" onChange={e => changeData(e, data[idx].key, setter)} />
      
      <input type="text" name="place" onChange={e => changeData(e, data[idx].key, setter)} />
      
      <input type="text" name="major" onChange={e => changeData(e, data[idx].key, setter)} />
      
      <input type="text" name="gen" onChange={e => changeData(e, data[idx].key, setter)} />

      <RenderingInputs changer={changeBullet} data={data} generalID={idx} set={setter}/>
    </div>
  )
}