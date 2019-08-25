import { getCurrentAmount, addFrequentRenterPoints } from "./utils";
import Rental from "./rental";

class Customer {
  /**
   *Creates an instance of Customer.
   * @param {String} name
   * @memberof Customer
   */
  constructor(name) {
    this._name = name;
    this._rentals = [];
  }

  /**
   * @readonly
   * @memberof Customer
   * @returns {String}
   */
  get name() {
    return this._name;
  }

  /**
   * @param {Rental} rental
   * @memberof Customer
   */
  addRental(rental) {
    this._rentals.push(rental);
  }

  /**
   * @memberof Customer
   * @returns {Array}
   */
  get rentals() {
    return this._rentals;
  }
}

/**
 * @returns {String}
 */
Customer.prototype.getStatement = function() {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${this.name}\n`;
  this.rentals.forEach(rental => {
    const currentAmount = getCurrentAmount(rental);

    frequentRenterPoints = addFrequentRenterPoints(
      frequentRenterPoints,
      rental
    );

    result += "  " + rental.movie.title + "  " + currentAmount + "\n";
    totalAmount += currentAmount;
  });
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;
  return result;
};

export default Customer;
