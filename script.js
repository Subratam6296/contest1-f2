const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developers = data.filter(dev => dev.profession === 'developer');
  console.log('Developers:', developers);
}

// 2. Add Data
function addData() {
  const name = prompt('Enter name:');
  const age = prompt('Enter age:');
  const profession = prompt('Enter profession:');
  
  const newData = { name: name.toLowerCase(), age: parseInt(age), profession: profession.toLowerCase() };
  data.push(newData);
}

// 3. Remove Admins
function removeAdmin() {
  data = data.filter(dev => dev.profession !== 'admin');
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: 'dummy1', age: 22, profession: 'developer' },
    { name: 'dummy2', age: 26, profession: 'admin' }
  ];
  
  const resultArray = data.concat(dummyArray);
  console.log('Concatenated Array:', resultArray);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((acc, dev) => acc + dev.age, 0);
  const avgAge = totalAge / data.length;
  console.log('Average Age:', avgAge);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some(dev => dev.age > 25);
  console.log('At least one person above 25:', isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map(dev => dev.profession))];
  console.log('Unique Professions:', professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log('Sorted Data by Age:', data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const johnIndex = data.findIndex(dev => dev.name === 'john');
  if (johnIndex !== -1) {
    data[johnIndex].profession = 'manager';
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter(dev => dev.profession === 'developer').length;
  const adminCount = data.filter(dev => dev.profession === 'admin').length;
  console.log('Total Developers:', developerCount, 'Total Admins:', adminCount);
}
