class Movie {
  /**
   *Creates an instance of Movie.
   * @param {String} title
   * @param {Number} priceCode
   * @memberof Movie
   */
  constructor(title, priceCode) {
    this._title = title;
    this._priceCode = priceCode;
  }

  /**
   * @readonly
   * @static
   * @memberof Movie
   * @returns {Number}
   */
  static get REGULAR() {
    return 0;
  }

  /**
   * @readonly
   * @static
   * @memberof Movie
   * @returns {Number}
   */
  static get NEW_RELEASE() {
    return 1;
  }

  /**
   * @readonly
   * @static
   * @memberof Movie
   * @returns {Number}
   */
  static get CHILDRENS() {
    return 2;
  }

  /**
   * @readonly
   * @memberof Movie
   * @returns {String}
   */
  get title() {
    return this._title;
  }


  /**
   * @readonly
   * @memberof Movie
   * @returns {Number}
   */
  get priceCode() {
    return this._priceCode;
  }
}

export default Movie;
