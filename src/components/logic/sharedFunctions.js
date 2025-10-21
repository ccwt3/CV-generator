export {updateItem, updateNestedItem, addNestedItem, deleteItem, deleteNestedItem}

function updateItem(event, id, setState) {
    setState(prev => prev.map(exp =>
      exp.key === id 
      ? {...exp, [event.target.name]: event.target.value}
      : exp
    )
  );
}

function updateNestedItem(event, id, nestedID, setState, key) {
  setState(prev => prev.map(item => {
    if (item.key === id) {
      return {
        ...item,
        [key]: item[key].map(nested => {
          
          if (nested.key === nestedID) {
            return {...nested, text: event.target.value}
          }
          else {
            return nested;
          }

        })
      };
    }
    else {
      return item;
    }
  }));
}

function addNestedItem(id, setState, key) {
  setState(prev => prev.map(item => {
    if (item.key === id) {
      return {
        ...item,
        [key]: [
          ...item[key],
          {
            key: crypto.randomUUID(),
            text: 'set info',
          }
        ]
      };
    }
    else {
      return item;
    }
  }));
}

function deleteItem(id, setState) {
  setState(prev => prev.filter(item => item.key !== id));
}

function deleteNestedItem(id, nestedID, setState, key) {
  setState(prev => prev.map(item => {
    if (item.key === id) {
      return {
        ...item,
        [key]: item[key].filter(nested => nested.key !== nestedID)
      }
    }
    else {
      return item;
    }
  }));
}

/*//! Cosas por hacer
//todo 3. Re-factor the classes and divs of ALL THE COMPONENTS (keys and classes)
*/