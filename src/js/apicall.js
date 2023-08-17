export class APICall {
  static async getRates() {
    const API_KEY = `${process.env.API_KEY}`;
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const currency = data.conversion_rates;
      
      if(currency) {
        const euro = currency.EUR;
        const russia = currency.RUS;
        const canada = currency.CAD;
        const egypt = currency.EGP;
        const gold = currency.XAU;
        return {euro, russia, canada, egypt, gold};
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
}