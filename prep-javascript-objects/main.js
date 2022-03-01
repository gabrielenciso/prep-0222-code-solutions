var person = {
  firstName: 'Gabriel',
  lastName: 'Enciso',
  hobby: 'tennis'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is:', fullName);
person.job = 'astronaut';
console.log('The person\'s job is:', person.job);
person.previousJob = 'dentist';
console.log('The person\'s previous job is:', person.previousJob);
console.log(person);
