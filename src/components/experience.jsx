//! I need to return a list of jobs in order to render them if more
//! PLUS i need to return a diferent list for the experience list


function JobFragment(e) {
  e = e.data
  
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
    </>
  )
}

export default function Experience( {data} ) {
  return (
    <div className="job_experience">
      {
        data.map(job => <JobFragment data={job} />)
      }
    </div>
  )
}