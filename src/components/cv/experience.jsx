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
          <p className="strong">{e.company}</p>
          <p>{e.position}</p>
        </div>
    
        <div className="CV__job_info_two">
          <p className="strong">{e.place}</p>
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
      <div className="CV__job_title_wrapper">
        <h2 className="strong">Job experience</h2>
      </div>

      {
        data.map((job) => <JobFragment data={job} key={job.key}/>)
      }
    </section>
  )
}