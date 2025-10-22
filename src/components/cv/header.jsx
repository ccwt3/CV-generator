export default function HeaderInfo({data}) {
  
  return (
    <section className="CV__header">
      <h1>{data.name}</h1>
     
      <div className="CV__header_contact">
        <p>{data.direction}</p>
        <a href={data.linkedIn}>{data.linkedIn}</a>
        <p>{data.phone}</p>
        <p>{data.email}</p>
      </div>

      <p className="CV__header_description">{data.description}</p>
    </section>
  )
}