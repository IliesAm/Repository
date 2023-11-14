import chalk from 'chalk';

const colleagues = ["Name1", "Name2", "Name3", "Name4"];
const myColors=["blue", "red", "green", "yellow"];

colleagues.forEach((colleague, i) => {
    const coloredName = chalk[myColors[i]](colleague);
    console.log(coloredName);
  });