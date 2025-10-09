function RenderingInputs({ changer, data, generalID, set }) {
  const bullets = data[generalID]?.bullet ?? [];
  
  return bullets.map(bul => {
    return (
      <input
        key={bul.key}
        type="text"
        name="bullet"
        placeholder="Dinamicos"
        onChange={e => changer(e, data[generalID].key, bul.key, set)}
      />
    )
  });
}

export default function JobInputs( {changeData, changeBullet, data, idx, setter} ) {
  return (
    <>
      <input type="text" name="company" onChange={e => changeData(e, data[idx].key, setter)} />
      
      <input type="text" name="position" onChange={e => changeData(e, data[idx].key, setter)} />
      
      <input type="text" name="place" onChange={e => changeData(e, data[idx].key, setter)} />
      
      <input type="text" name="period" onChange={e => changeData(e, data[idx].key, setter)} />

      <RenderingInputs changer={changeBullet} data={data} generalID={idx} set={setter}/>
    </>
  )
}