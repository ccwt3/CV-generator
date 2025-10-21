import { updateItem, updateNestedItem, addNestedItem } from "./sharedFunctions";
export {changeEducation, changeEducationBullet, addEducation, addEducationBullet}

function changeEducation(event, id, setState) {
  updateItem(event, id, setState);
}

function changeEducationBullet(event, id, bulletID, setState) {
  updateNestedItem(event, id, bulletID, setState, 'certifications');
}

function addEducationBullet(id, setState) {
  addNestedItem(id, setState, 'certifications');
}

function addEducation(e, setState) {
  setState(prev => [
    ...prev,
    {
      key: crypto.randomUUID(),
      institution: 'Add info',
      place: '',
      major: '',
      gen: '',

      certifications: [],
    }
  ]);
}