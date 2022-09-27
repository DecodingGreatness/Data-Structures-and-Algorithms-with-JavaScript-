class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  append = (element) => {
    this.dataStore[this.listSize++] = element;
  };

  find = (element) => {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] == element) {
        return i;
      }
    }
    return -1;
  };

  remove = (element) => {
    let foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      this.listSize--;
      return true;
    }
    return false;
  };

  length = () => {
    return this.listSize;
  };

  toSting = () => {
    return this.dataStore;
  };

  insert = (element, after) => {
    let insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      this.listSize++;
      return true;
    }
    return false;
  };

  clear = () => {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  };

  contains = (element) => {
    for (let i = 0; i < this.dataStore.length; i++) {
      if ((this.dataStore[i] = element)) {
        return true;
      }
    }
    return false;
  };

  front = () => {
    this.pos = 0;
  };

  end = () => {
    this.pos = this.listSize - 1;
  };

  prev = () => {
    if (this.pos > 0) {
      this.pos--;
    }
  };

  next = () => {
    if (this.pos < this.listSize - 1) {
      this.pos++;
    }
  };

  currPos = () => {
    return this.pos;
  };

  moveTo = (position) => {
    this.pos = position;
  };

  getElement = () => {
    return this.dataStore[this.pos];
  };
}

// movie list
function createArr(file) {
  const { readFileSync } = require("fs");
  let arr = readFileSync(file).toString().replace(/\r\n/g, "\n").split("\n");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim();
    console.log(arr[i]);
  }
}

let displayList = (list) => {
  for (list.front(); list.currPos() < list.length(); list.next()) {
    if (list.getElement() instanceof Customer) {
      console.log(list.getElement()["name"] + "," + list.getElement()["movie"]);
    } else {
      console.log(list.getElement());
    }
  }
};

// customer

class Customer {
  constructor(name, movie) {
    this.name = name;
    this.movie = movie;
  }

  checkOut = (name, movie, filmList, customerList) => {
    if (movieList.contains(movie)) {
      let c = new Customer(name, movie);
      customerList.append(c);
      filmList.remove(movie);
    } else {
      console.log(movie + "is not available.");
    }
  };
}

// test code
let movies = createArr("films.txt");
console.log(typeof movies);
let movieList = new List();
let customers = new List();
for (let i = 0; i < movies.length; i++) {
  movieList.append(movies[i]);
}
console.log("Available movies: \n");
displayList(movieList);
checkOut("Jane Doe", "The Godfather", movieList, customers);
console.log("\nCustomer Rentals:\n");
displayList(customers);
