export default function HeaderInputs( {changeHeader} ) {
  return (
    <section className="forms__header">
      <div className="forms__label-input">
        <label htmlFor="header__name">Name:</label>
        <input type="text" name="name" id="header__name" onChange={changeHeader}/>
      </div>

      <div className="forms__label-input">
        <label htmlFor="header__adress">Adress:</label>
        <input type="text" name="direction" id="header__adress" onChange={changeHeader}/>
      </div>
      
      <div className="forms__label-input">
        <label htmlFor="header__linkedIn">LinkedIn:</label>
        <input type="text" name="linkedIn" id="header__linkedIn" onChange={changeHeader}/>
      </div>
      
      <div className="forms__label-input">
        <label htmlFor="header__phone">Phone:</label>
        <input type="text" name="phone" id="header__phone" onChange={changeHeader}/>
      </div>
      
      <div className="forms__label-input">
        <label htmlFor="header__email">Email:</label>
        <input type="text" name="email" onChange={changeHeader}/>
      </div>
      
      <div className="forms__label-input">
        <label htmlFor="header__description">Description:</label>
        <textarea type="text" name="description" onChange={changeHeader}/>
      </div>

    </section>
  )
}