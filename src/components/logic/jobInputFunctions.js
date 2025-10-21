import { updateItem, updateNestedItem, addNestedItem } from "./sharedFunctions";
export {changeExperience, changeExperienceBullet, addExperience, addBullet}

function changeExperience(event, id, setState) {
  updateItem(event, id, setState);
}

function changeExperienceBullet(event, id, bulletID, setState) {
  updateNestedItem(event, id, bulletID, setState, 'bullet');
}

function addBullet(id, setState) {
  addNestedItem(id, setState, 'bullet');
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