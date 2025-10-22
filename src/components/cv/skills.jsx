function List (text) {
  text = text.data;
  return (
    <li>{text}</li>
  )
}

export default function Skills ( {data} ) {
  return (
    <div className="CV__skills">
      <h2>Extra skills</h2>
      <ul className="CV__skills_list">
        {
          data.map(e => <List key={e.key} data={e.text} />)
        }
      </ul>
    </div>
  )
}