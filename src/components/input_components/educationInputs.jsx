function RenderingInputs({ changer, data, generalID }) {
  const certification = data[generalID]?.certifications ?? [];
  
  return certification.map(cert => {
    return (
      <input
        key={cert.key}
        type="text"
        name="certifications"
        placeholder="Dinamicos"
        onChange={e => changer(e, data[generalID].key, cert.key)}
      />
    )
  });
}

export default function EducationInputs( {changeData, changeBullet, data, idx} ) {
  return (
    <>
      <input type="text" name="institution" onChange={e => changeData(e, data[idx].key)} />
      
      <input type="text" name="place" onChange={e => changeData(e, data[idx].key)} />
      
      <input type="text" name="major" onChange={e => changeData(e, data[idx].key)} />
      
      <input type="text" name="gen" onChange={e => changeData(e, data[idx].key)} />

      <RenderingInputs changer={changeBullet} data={data} generalID={idx}/>
    </>
  )
}