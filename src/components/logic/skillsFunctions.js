import { updateItem } from "./sharedFunctions"

export function changeSkills(e, id, setState) {
  updateItem(e, id, setState);
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