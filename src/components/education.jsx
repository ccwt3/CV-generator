export default function Education( {data} ) {
  
  return (
    <section className="education">
      <h2>Education</h2>

      <div className="education__info">
        <p>{data.institution}</p>
        
      </div>
    </section>
  )
}