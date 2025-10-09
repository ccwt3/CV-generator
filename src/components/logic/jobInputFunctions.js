export {changeExperience, changeExperienceBullet, addExperience, addBullet}

function changeExperience(event, id, setState) {
  setState(prev => prev.map(exp =>
      exp.key === id 
      ? {...exp, [event.target.name]: event.target.value}
      : exp
    )
  );
}

function changeExperienceBullet(event, id, bulletID, setState) {
  setState(prev => prev.map(exp => {
    if (exp.key === id) {
      return {
        ...exp,
        bullet: exp.bullet.map(bul => {
          if (bul.key === bulletID) {
            return {...bul, text: event.target.value}
          }
          else {
            return bul;
          }
        })
      };
    }
    else {
      return exp;
    }
  }));
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

function addBullet(id, setState) {
  setState(prev => prev.map(exp => {
    if (exp.key === id) {
      return {
        ...exp,
        bullet: [
          ...exp.bullet,
          {
            key: crypto.randomUUID(),
            text: 'set info',
          }
        ]
      };
    }
    else {
      return exp;
    }
  }));
}