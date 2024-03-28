// # Завдання 3

// Створіть масив об'єктів "студентів", який містить властивості "ім'я", "вік" та
// "рейтинг". Додайте до масиву метод "вітатися", який буде повертати рядок з
// привітанням зі зазначенням імені студента.

// Використовуючи метод "map()", створіть новий масив, який містить привітання з
// кожним студентом з масиву "студентів". Використовуючи метод "filter()", створіть
// новий масив, який містить тільки ті об'єкти типу "студент", які мають рейтинг
// вище заданого значення.

// Створіть функцію "addRating", яка приймає один аргумент - кількість балів, на
// яку потрібно збільшити рейтинг студента. Викличте функцію "addRating" на кожному
// елементі масиву "студентів". Перевірте, що в контексті функції "addRating"
// значення "this" вказує на конкретний об'єкт "студент". Виведіть новий масив зі
// зміненими рейтингами в консоль.

const students = [
    { name: 'Тарас', age: 17, rating: 36},
    { name: 'Даша', age: 15, rating: 21},
    { name: 'Олексій', age: 16, rating: 52},
    { name: 'Ніка', age: 17, rating: 28},
];

function greetStudent(student){
  return ` Привіт я ${student.name}`
};

students.forEach(student => {
console.log(greetStudent(student));
});

const greetings = students.map(student =>  ` Привіт я ${student.name}`)
console.log(greetings);

const filteredRating = students.filter( ({rating}) => rating > 30)
console.log(filteredRating);

function addRating(points) {
    this.rating += points
}
students.forEach(student => addRating.call(student, 7));
console.log(students);
