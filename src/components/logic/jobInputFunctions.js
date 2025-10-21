import { updateItem, updateNestedItem, addNestedItem, deleteItem } from "./sharedFunctions";
export {changeExperience, changeExperienceBullet, addExperience, addBullet, deleteExperience}

function changeExperience(event, id, setState) {
  updateItem(event, id, setState);
}

function changeExperienceBullet(event, id, bulletID, setState) {
  updateNestedItem(event, id, bulletID, setState, 'bullet');
}

function addBullet(id, setState) {
  addNestedItem(id, setState, 'bullet');
}

function deleteExperience(id, setState) {
  deleteItem(id, setState);
}

function addExperience(e, setState) {
  setState(prev => [
    ...prev,
    {
      key: crypto.randomUUID(),
      company: 'Add info',
      position: '',
      place: '',
      period: '',

      bullet: [],
    }
  ]);
}