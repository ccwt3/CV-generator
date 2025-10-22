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

function SchoolFragment(e) {
  e = e.data;
  return (
    <div className="CV__education_bundle">
      <div className="CV__education_info">

        <div className="CV__education_info_one">
          <p>{e.institution}</p>
          <p>{e.major}</p>
        </div>

        <div className="CV__education_info_two">
          <p>{e.place}</p>
          <p>{e.gen}</p>
        </div>

        <ul className="CV__education_list">
          <ListFragment data={e.certifications} />
        </ul>

      </div>
    </div>
  )
}

export default function Education( {data} ) {
  
  return (
    <div className="CV__education">
      <h2>Education</h2>
      {
        data.map(school => <SchoolFragment data={school} key={school.key}/>)
      }
    </div>
  )
}