export default function JobInputs( {changeData, changeBullet, data} ) {
  return (
    <>
      <input type="text" name="company" onChange={e => changeData(e, data[0].key)} />
      
      <input type="text" name="position" onChange={e => changeData(e, data[0].key)} />
      
      <input type="text" name="place" onChange={e => changeData(e, data[0].key)} />
      
      <input type="text" name="period" onChange={e => changeData(e, data[0].key)} />


      <input type="text" name="bullet" onChange={e =>
         changeBullet(
          e, 
          data[0].key, 
          data[0].bullet[0].key
        )}
      />

      <input type="text" name="bullet" onChange={e =>
         changeBullet(
          e, 
          data[0].key, 
          data[0].bullet[1].key
        )}
      />
    </>
  )
}