import { deleteEducationBullet } from "../logic/educationFunctions";

function RenderingInputs({ changer, data, generalID, set }) {
  const certification = data[generalID]?.certifications ?? [];
  
  return certification.map(cert => {
    return (
      <div key={cert.key}>
        <input
        type="text"
        name="certifications"
        placeholder="Dinamicos"
        onChange={e => changer(e, data[generalID].key, cert.key, set)}
        />

        <button onClick={e => deleteEducationBullet(data[generalID].key, cert.key, set)}>D</button>
      </div>
    )
  });
}

export default function EducationInputs( {changeData, changeBullet, data, idx, setter} ) {
  return (
    <>
      <input type="text" name="institution" onChange={e => changeData(e, data[idx].key, setter)} />
      
      <input type="text" name="place" onChange={e => changeData(e, data[idx].key, setter)} />
      
      <input type="text" name="major" onChange={e => changeData(e, data[idx].key, setter)} />
      
      <input type="text" name="gen" onChange={e => changeData(e, data[idx].key, setter)} />

      <RenderingInputs changer={changeBullet} data={data} generalID={idx} set={setter}/>
    </>
  )
}