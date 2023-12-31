import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { APICall } from './js/apicall';

const exchange = document.getElementById('exchange');
exchange.addEventListener('click', async () => {
  const currencyType = document.getElementById('convert').value;
  const USD = parseFloat(document.getElementById('USD').value);
  try {
    const exchangeRates = await APICall.getRates();
    const converted = calculateExchangeRate(USD, currencyType, exchangeRates);
    showResult(USD, converted, currencyType);
  } catch (error) {
    showError();
  }
});

function calculateExchangeRate(USD, currencyType, exchangeRates) {
  if (currencyType in exchangeRates) {
    const exchangeRate = exchangeRates[currencyType];
    const convertedAmount = USD * exchangeRate;
    return convertedAmount.toFixed(2);
  } else {
    showError();
  }
}

function showResult(USD, converted, currencyType) {
  const displayResult = document.getElementById("result");
  if (!isNaN(USD)) {
    displayResult.textContent = `$${USD} converts to ${converted} ${currencyType}`;
  } else {
    showError();
  }
}

function showError() {
  const displayResult = document.getElementById("result");
  displayResult.textContent = 'Sorry. Unable to properly convert currency.';
}