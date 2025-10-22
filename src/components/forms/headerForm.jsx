export default function HeaderInputs( {changeHeader} ) {
  return (
    <section className="forms__header">
      <input type="text" name="name" onChange={changeHeader}/>
      <input type="text" name="direction" onChange={changeHeader}/>
      <input type="text" name="linkedIn" onChange={changeHeader}/>
      <input type="text" name="phone" onChange={changeHeader}/>
      <input type="text" name="email" onChange={changeHeader}/>
      <input type="text" name="description" onChange={changeHeader}/>
    </section>
  )
}