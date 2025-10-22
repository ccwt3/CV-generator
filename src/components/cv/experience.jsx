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
    <div className="CV__job_bundle">
      <div className="CV__job_info">
        
        <div className="CV__job_info_one">
          <p>{e.company}</p>
          <p>{e.position}</p>
        </div>
    
        <div className="CV__job_info_two">
          <p>{e.place}</p>
          <p>{e.period}</p>
        </div>
      </div>
    
      <ul className="CV__job_list">
        <ListFragment data={e.bullet} />
      </ul>
    </div>
  )
}

export default function Experience( {data} ) {
  return (
    <section className="CV__jobs">
      <h2>Job experience</h2>
      {
        data.map((job) => <JobFragment data={job} key={job.key}/>)
      }
    </section>
  )
}