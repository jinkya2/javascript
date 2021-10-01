/**
 * CLASS STATIC PROPERTIES AND METHODS
 */

class User {
  static propertyName = "valule";
  // same as User.staticMethod1=function(){}
  static staticMethod1() {
    console.log(this === User);
  }
}

// User.staticMethod1();

/**
 * Class static properties and methods stands above their object instances.
 * Suppose we have an Article class, where we need to compare them by dates
 */

class Article {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }
  static compare(article1, article2) {
    return article1.date - article2.date;
  }
}

let articles = [
  new Article("Title 2", new Date(2019, 1, 12)),
  new Article("Title 4", new Date(2021, 2, 12)),
  new Article("Title 1", new Date(2018, 3, 12)),
  new Article("Title 3", new Date(2020, 4, 12)),
];

articles.sort(Article.compare);
console.log(articles);

console.info(new Date(2020, 1, 15)); // 15 Feb 2020

/**
 * Static properties and methods are inherited!
 */
