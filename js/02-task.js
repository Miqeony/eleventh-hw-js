// # Завдання 2

// Створіть об'єкт `car`, який містить властивості марка, модель, рік випуску,
// швидкість.

// Створіть ще один обʼєкт `location`, який містить властивість `city` та
// `distance`

// Створіть метод обʼєкта car `showInfo()`, який виводить інформацію про автомобіль
// на екран у форматі
// `Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; `.

// Створіть функцію `showTime()`, яка буде вираховувати за який час автомобіль
// доїде до міста `city` та виводити в консоль повідомлення в форматі
// `Автомобіль {brand}, марки {model} дістанеться міста {city} за {time}`

// Використовуйте обєднання обʼєктів, метод forEach та ключове слово this для
// доступу до властивостей об'єкту.

const car = {
    brand: 'Dodge',
    model: 'Dodge Viper SRT-10 ACR',
    year: 2009,
    speed: 325,
    showInfo() {
        return `Марка: <${this.brand}>; Модель: <${this.model}>; Рік випуску: <${this.year}>;`
    },
};

const location = {
    city: 'Мадрид',
    distance: 2000,
};

function showTime() {
    car.showInfo()
    const time = Math.round(location.distance / car.speed);
    console.log(`Автомобіль ${car.brand}, моделі ${car.model} дістанеться міста ${location.city} за ${time} годин`);
};

console.log(car.showInfo());
showTime()