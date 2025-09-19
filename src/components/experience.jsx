
function JobFragment(e) {
  return (
    <>
      <div className="experience__info">
        <div className="info__one">
          <p>{e.company}</p>
          <p>{e.position}</p>
        </div>
    
        <div className="info__two">
          <p>{e.place}</p>
          <p>{e.period}</p>
        </div>
      </div>
    
      <ul className="experience__list">
        <li>e</li>
      </ul>
    
      <p className="header__description">{data.description}</p>
    </>
  )
}


export default function Experience( {data} ) {



  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      
      
    </section>
  )
}