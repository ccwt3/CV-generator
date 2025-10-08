function RenderingInputs({ changer, data, generalID }) {
  const bullets = data[generalID]?.bullet ?? [];
  
  return bullets.map(bul => {
    return (
      <input
        key={bul.key}
        type="text"
        name="bullet"
        placeholder="Dinamicos"
        onChange={e => changer(e, data[generalID].key, bul.key)}
      />
    )
  });
}

export default function JobInputs( {changeData, changeBullet, data, idx} ) {
  return (
    <>
      <input type="text" name="company" onChange={e => changeData(e, data[idx].key)} />
      
      <input type="text" name="position" onChange={e => changeData(e, data[idx].key)} />
      
      <input type="text" name="place" onChange={e => changeData(e, data[idx].key)} />
      
      <input type="text" name="period" onChange={e => changeData(e, data[idx].key)} />

      <RenderingInputs changer={changeBullet} data={data} generalID={idx}/>
    </>
  )
}