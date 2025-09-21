function ListFragment(bulletList) {
  bulletList = bulletList.data;

  return (
    <>
      {
        bulletList.map(point => <li>{point}</li>)
      }
    </>
  )
}

function SchoolFragment(e) {
  e = e.data;
  return (
    <>
      <div className="education__info">

        <div className="school-major">
          <p>{e.institution}</p>
          <p>{e.major}</p>
        </div>

        <div className="place-time">
          <p>{e.place}</p>
          <p>{e.gen}</p>
        </div>

        <ul className="education__list">
          <ListFragment data={e.certifications} />
        </ul>

      </div>
    </>
  )
}

export default function Education( {data} ) {
  
  return (
    <div className="education">
      <h2>Education</h2>
      {
        data.map(school => <SchoolFragment data={school} />)
      }
    </div>
  )
}