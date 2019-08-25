import Movie from "./movie";

class Rental {
  /**
   *Creates an instance of Rental.
   * @param {Movie} movie
   * @param {Number} daysRented
   * @memberof Rental
   */
  constructor(movie, daysRented) {
    this._movie = movie;
    this._daysRented = daysRented;
  }


  /**
   * @readonly
   * @memberof Rental
   * @returns {Movie}
   */
  get movie() {
    return this._movie;
  }


  /**
   * @readonly
   * @memberof Rental
   * @returns {Number}
   */
  get daysRented() {
    return this._daysRented;
  }
}

export default Rental;
