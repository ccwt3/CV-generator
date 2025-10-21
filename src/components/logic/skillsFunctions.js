import { updateItem, deleteItem } from "./sharedFunctions"

export function changeSkills(e, id, setState) {
  updateItem(e, id, setState);
}

export function deleteSkill(id, setState) {
  deleteItem(id, setState);
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