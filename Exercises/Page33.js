const Grades = class {
  constructor() {
    this.arr = [];
  }

  add = (grade) => {
    this.arr.push(grade);
  };

  avg = () => {
    let sum = 0;
    for (let i = 0; i < this.arr.length; i++) {
      sum += this.arr[i];
    }
    return sum / this.arr.length;
  };

  display = () => {
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]);
    }
  };

  reverseDisplay = () => {
    for (let i = this.arr.length - 1; i > -1; i--) {
      console.log(this.arr[i]);
    }
  };

  clear = () => {
    this.arr = [];
  };
};

const score = new Grades();

score.clear();
score.display();
score.add(23);
score.display();
score.add(70);
score.add(33);
score.display();
score.reverseDisplay();

const MonthlyGrades = class {
  constructor(rows, cols, grade) {
    this.arr = [];
    this.rows = rows;
    this.cols = cols;
  }

  matrix = (rows, cols, init) => {
    for (let i = 0; i < rows; i++) {
      let columns = [];
      for (let j = 0; j < cols; j++) {
        columns[j] = init;
      }
      this.arr[i] = columns;
    }
    return this.arr;
  };

  display = () => {
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]);
    }
  };

  add = (row, col, grade) => {
    this.arr[row][col] = grade;
    console.log(this.arr);
  };

  weekadd = (row, gradeArr) => {
    this.arr[row] = gradeArr;
    console.log(this.arr);
  };

  specificWeekAvg = (week) => {
    let chosenWeek = this.arr[week - 1];
    let sum = 0;
    for (let i = 0; i < chosenWeek.length; i++) {
      sum += chosenWeek[i];
    }
    console.log(sum / chosenWeek.length);
  };

  allWeekAvg = (numWeek) => {
    let sum = 0;
    let count = 0;
    for (let row = 0; row < this.arr.length; row++) {
      for (let col = 0; col < this.arr[row].length; col++) {
        sum += this.arr[row][col];
        count++;
      }
    }
    console.log(sum / count);
  };
};

const monthChart = new MonthlyGrades();
let nums = monthChart.matrix(5, 6, 0);
console.log(nums);
monthChart.add(3, 2, 80);
monthChart.weekadd(0, [23, 47, 58, 99, 70]);
monthChart.weekadd(1, [43, 27, 88, 89, 40]);
monthChart.weekadd(2, [33, 67, 18, 19, 80]);
monthChart.weekadd(3, [73, 07, 08, 29, 90]);
monthChart.weekadd(4, [53, 17, 98, 49, 43]);
monthChart.specificWeekAvg(1);
monthChart.allWeekAvg(5);
