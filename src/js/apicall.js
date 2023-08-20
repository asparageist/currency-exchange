export class APICall {
  static async getRates() {
    const API_KEY = process.env.API_KEY;
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;
      const response = await fetch(url);
      const data = await response.json();
      const currency = data.conversion_rates;
      
      if(currency) {
        const EUR = currency.EUR;
        const RUB = currency.RUB;
        const CAD = currency.CAD;
        const EGP = currency.EGP;
        const JPY = currency.JPY;
        return {EUR, RUB, CAD, EGP, JPY};
      } else {
        return null;
      }
  }
}