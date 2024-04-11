import Currency from "./3-currency";

export default class Pricing {
  constructor(price, currency) {
    this._price = price;
    this._currency = currency;
  }

  get price() {
    return this._price;
  }

  get currency() {
    return this._currency;
  }

  set price(price) {
    this._price = price;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._price} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
