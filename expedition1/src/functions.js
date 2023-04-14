const fs = require('fs');

const crew = fs.readFileSync('./src/crew.txt', 'utf-8').split('\r\n');
console.log(crew);
const rovers = fs.readFileSync('./src/equipment.txt', 'utf-8').split('\r\n');
console.log(rovers);
const rockets = fs.readFileSync('./src/rockets.txt', 'utf-8').split('\r\n');
console.log(rockets);

//позволяет выбрать самого опытного капитана
function getRightCaptain() {
  let candidates = crew.filter(el => el.includes('Капитан'));
  let experience = 0;
  let mostExperienced;
    for (let el of candidates) {
      if (el.substr(-2, 2) > experience) {
        experience = +el.substr(-2, 2);
        mostExperienced = el;
      }
    }
    return mostExperienced;
  }
console.log('Cамый опытный капитан: ' + getRightCaptain());

//позволяет выбрать самого опытного врача среди женщин
function getRightDoc() {
  let candidates = crew.filter(el => (el.includes('Врач') && el.includes('ж')));
  let experience = 0;
  let mostExperienced;
  for (let el of candidates){
    if (el.substr(-2,2) > experience){
      experience = +el.substr(-2, 2);
      mostExperienced = el;
    }
  }
  return mostExperienced;
}
console.log('Cамый опытный врач-женщина: '+ getRightDoc())

//позволяет выбрать всех бортмехаников
function getAllEngineers() {
return crew.filter(el => el.includes('Бортмеханик'));
}
console.log('Бортмеханики: ' + getAllEngineers())

//Позволяет отобрать все марсоходы
function getAllRovers(){
  return rovers.filter(el => el.includes('марсоход'));
}
console.log('Марсоходы: ' + getAllRovers())

//позволяет выбрать только те марсоходы, которые смогут прослужить больше 3 лет
function getRightRovers(){
  let rovers = rovers.filter(el => el.includes('марсоход'));
  let rightRovers = [];
  for (let el of rovers) {
    if (+el.substr(-1, 2) > 3) {
      rightRovers.push(el);
    }
  }
  return rightRovers;
}
console.log('Марсоходы, которые смогут прослужить больше 3 лет: ' + getRightRovers())

//позволяет выбрать ракету с максимальной дальностью полёта
function getRightRocket(){
  let newArr = rockets.map(el => el.split(','));
  console.log(newArr);
  let flightRange = 0;
  let rightRocket;
  for (el of newArr) {
      if (+el[2] > flightRange) {
        flightRange = +el[2]
        rightRocket = el;
      }
  }
  return rightRocket;
}
console.log('Ракета с максимальной дальностью полёта: ' + getRightRocket())

module.exports = {
  getRightCaptain,
  getAllEngineers,
  getRightDoc,
  getAllRovers,
  getRightRovers,
  getRightRocket
};
