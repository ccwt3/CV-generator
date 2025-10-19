export function changeSkills(e, skill, setState) {
  setState(prev => prev.map(s => 
    s.key === skill.key ?
    {...s, text: e.target.value} 
    : s
  ))
}

export function addSkill(e, setState) {
  setState(prev => [
    ...prev,
    {
      key: crypto.randomUUID(),
      text: 'insert skill'
    }
  ])
}