function List (text) {
  text = text.data;
  return (
    <li>{text}</li>
  )
}

export default function Skills ( {data} ) {
  return (
    <div className="skills">
      <h2>Extra skills</h2>
      <ul>
        {
          data.map(e => <List data={e} />)
        }
      </ul>
    </div>
  )
}