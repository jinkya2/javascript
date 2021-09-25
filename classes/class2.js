class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run = (speed) => {
    this.speed = speed;
    console.log(`Animal is running with ${speed}`);
  };
}
