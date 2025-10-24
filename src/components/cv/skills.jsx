function List (text) {
  text = text.data;
  return (
    <li>{text}</li>
  )
}

export default function Skills ( {data} ) {
  return (
    <div className="CV__skills">
      <div className="CV__skills_title_wrapper">
        <h2>Extra skills</h2>
      </div>
      
      <ul className="CV__skills_list">
        {
          data.map(e => <List key={e.key} data={e.text} />)
        }
      </ul>
    </div>
  )
}