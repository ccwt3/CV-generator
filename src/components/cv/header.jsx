export default function HeaderInfo({data}) {
  
  return (
    <section className="CV__header">
      <div className="CV__header_name">
        <h1>{data.name}</h1>
      </div>
     
      <ul className="CV__header_contact">
        <li>{data.direction}</li>
        <li><a href={data.linkedIn}>LinkedIn</a></li>
        <li>{data.phone}</li>
        <li>{data.email}</li>
      </ul>

      <p className="CV__header_description">{data.description}</p>
    </section>
  )
}