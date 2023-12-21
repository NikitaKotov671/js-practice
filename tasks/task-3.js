const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const Password = prompt("Введіть пароль:");

if (Password === null) {
  message = "Скасовано користувачем!";
} else if (Password === ADMIN_PASSWORD) {
  message = "Ласкаво просимо!";
} else {
  message = "Доступ заборонений, невірний пароль!";
}

alert(message);