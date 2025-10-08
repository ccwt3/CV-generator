export default function HeaderInputs( {changeHeader} ) {
  return (
    <>
      <input type="text" name="name" onChange={changeHeader}/>
      <input type="text" name="direction" onChange={changeHeader}/>
      <input type="text" name="linkedIn" onChange={changeHeader}/>
      <input type="text" name="phone" onChange={changeHeader}/>
      <input type="text" name="email" onChange={changeHeader}/>
      <input type="text" name="description" onChange={changeHeader}/>
    </>
  )
}