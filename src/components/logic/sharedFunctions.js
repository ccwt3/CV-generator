export {updateItem, updateNestedItem, addNestedItem}

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