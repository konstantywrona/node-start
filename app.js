const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = [
  'Keven',
  'Tobias',
  'Kennedy',
  'Saul',
  'Terrence',
  'Brandon',
  'Johan',
  'Gabriel',
  'Vincent',
  'Chandler',
];
const femaleNames = [
  'Emma',
  'Olivia',
  'Ava',
  'Isabella',
  'Sophia',
  'Mia',
  'Charlotte',
  'Amelia',
  'Harper',
  'Evelyn',
];
const lastNames = [
  'Smith',
  'Johnson',
  'Brown',
  'Davis',
  'Wilson',
  'Garcia',
  'Martinez',
  'Anderson',
  'Taylor',
  'Thomas',
];

const randChoice = (arr) => {
  const randNumber = Math.floor(Math.random() * arr.length);
  return randNumber;
};

const people = [];

for (let i = 0; i < 20; i++) {
  const person = {};
  const gender = genders[randChoice(genders)];
  const id = (person.gender = gender);
  if (gender === 'M') person.name = maleNames[randChoice(maleNames)];
  if (gender === 'F') person.name = femaleNames[randChoice(femaleNames)];
  person.lastNames = lastNames[randChoice(lastNames)];
  person.age = Math.floor(Math.random() * (70 - 10) + 10);
  person.email =
    person.name.toLowerCase() +
    '.' +
    person.lastName.toLocaleLowerCase() +
    '@gmail.com';
  person.phone = '+44' + Math.floor(Math.random() * 1000000000 + 1000000000);
  people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  console.log(people.length);
  if (err) throw err;
  console.log(people, 'File has been successfully generated');
});
1;
people.json;
