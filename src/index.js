import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { APICall } from './js/apicall';

const exchange = document.getElementById('exchange');
exchange.addEventListener('click', () => {
  const currencyType = document.getElementById('convert');
  const USD = document.getElementById('USD').value;
  console.log(currencyType, USD);
  new APICall(currencyType, USD);
  const converted = "ello";
  exchangeRate();
  showResult(USD, converted, currencyType);
});

function exchangeRate() {
}

function showResult(USD, converted, currencyType) {
  const displayResult = document.getElementById("insert");
  displayResult.textContent = `${USD} converts to ${converted} ${currencyType}`;
}