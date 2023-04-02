

//позволяет выбрать самого опытного капитана
function getRightCaptain(arr) {
  let candidates = arr.filter(el => el.includes('Капитан'));
  console.log(candidates);
  let experience = 0;
  let mostExperienced;
    for (let el of candidates) {
      if (el.substr(-2, 2) > experience) {
        experience = +el.substr(-2, 2);
        console.log(experience);
        mostExperienced = el;
      }
    }
    return mostExperienced;
  }


console.log(getRightCaptain([
  'Роберт Стивенсон, м, Капитан, 12',
  'Кэтерин Лоу, ж, Врач, 9',
  'Уильям Блейк, м, Бортмеханик, 11',
  'Стив Джонсон, м, Капитан, 23',
  'Клара Томпсон, ж, Врач, 10',
  'Том Браун, м, Врач, 14',
  'Джуди Лестер, ж, Бортмеханик, 16',
]))

//позволяет выбрать самого опытного врача среди женщин
function getRightDoc() {

}

//позволяет выбрать всех бортмехаников
function getAllEngineers() {

}

//Позволяет отобрать все марсоходы
function getAllRovers(){

}

//позволяет выбрать только те марсоходы, которые смогут прослужить больше 3 лет
function getRightRovers(){

}

//позволяет выбрать ракету с максимальной дальностью полёта
function getRightRocket(){

}


module.exports = {
  getRightCaptain,
  getAllEngineers,
  getRightDoc,
  getAllRovers,
  getRightRovers,
  getRightRocket
};
