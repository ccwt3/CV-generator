export default function HeaderInfo({data}) {
  
  return (
    <section className="header">
      <h1>{data.name}</h1>
     
      <div className="header__contact">
        <p>{data.direction}</p>
        <a>{data.linkedIn}</a>
        <p>{data.phone}</p>
        <p>{data.email}</p>
      </div>

      <p className="header__description">{data.description}</p>
    </section>
  )
}