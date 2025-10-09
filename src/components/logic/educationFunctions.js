export {changeEducation, changeEducationBullet, addEducation, addEducationBullet}

function changeEducation(event, id, setState) {
  setState(prev => prev.map(exp =>
      exp.key === id 
      ? {...exp, [event.target.name]: event.target.value}
      : exp
    )
  );
}

function changeEducationBullet(event, id, bulletID, setState) {
  setState(prev => prev.map(exp => {
    if (exp.key === id) {
      return {
        ...exp,
        certifications: exp.certifications.map(bul => {
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

function addEducationBullet(id, setState) {
  setState(prev => prev.map(exp => {
    if (exp.key === id) {
      return {
        ...exp,
        certifications: [
          ...exp.certifications,
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