let country = prompt("Введіть країну доставки:");
let countryLowerCase = country.toLowerCase();
let deliveryCost;

switch (countryLowerCase) {
  case "Китай":
    deliveryCost = 100;
    break;

  case "Чилі":
    deliveryCost = 250;
    break;

  case "Австралія":
    deliveryCost = 170;
    break;

  case "Індія":
    deliveryCost = 80;
    break;

  case "Ямайка":
    deliveryCost = 120;
    break;

  default:
    alert("У вашій країні доставка недоступна");
}

if (deliveryCost !== undefined) {
  console.log(`Доставка в ${country} буде коштувати ${deliveryCost} кредитів`);
}

