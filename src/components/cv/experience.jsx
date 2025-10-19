function ListFragment(bulletList) {
  bulletList = bulletList.data;

  return (
    <>
      {
        bulletList.map(point => <li key={point.key}>{point.text}</li>)
      }
    </>
  )
}

function JobFragment(e) {
  e = e.data;
  
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
        <ListFragment data={e.bullet} />
      </ul>
    </>
  )
}

export default function Experience( {data} ) {
  return (
    <div className="job_experience">
      <h2>Job experience</h2>
      {
        data.map((job) => <JobFragment data={job} key={job.key}/>)
      }
    </div>
  )
}