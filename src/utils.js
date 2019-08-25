import Movie from "./movie";
import Rental from "./rental";

/**
 * @param {Rental} rental
 * @returns {Number}
 */
function getCurrentAmount(rental) {
  let thisAmount = 0;

  switch (rental.movie.priceCode) {
    case Movie.REGULAR:
      thisAmount += 2;
      if (rental.daysRented > 2) {
        thisAmount += (rental.daysRented - 2) * 1.5;
      }
      break;
    case Movie.NEW_RELEASE:
      thisAmount += rental.daysRented * 3;
      break;
    case Movie.CHILDRENS:
      thisAmount += 1.5;
      if (rental.daysRented > 3) {
        thisAmount += (rental.daysRented - 3) * 1.5;
      }
    default:
      break;
  }

  return thisAmount;
}

/**
 * @param {Number} frequentRenterPoints
 * @param {Rental} rental
 * @returns {Number}
 */
function addFrequentRenterPoints(frequentRenterPoints, rental) {
  frequentRenterPoints += 1;
  // add bonus for a two day new release rental
  if (rental.movie.priceCode === Movie.NEW_RELEASE && rental.daysRented > 1) {
    frequentRenterPoints += 1;
  }

  return frequentRenterPoints;
}

export { getCurrentAmount, addFrequentRenterPoints };
