/**
 * By starting at the top of the triangle and moving to adjacent numbers on the row
below, the maximum total from top to bottom is 27.
 5
 9 6
4 6 8
0 7 1 5
i.e. 5 + 9 + 6 + 7 = 27.
Write a program using a language of your choice to find the maximum total from
top to bottom in a text file containing a triangle with 100 rows.
 */
const fs = require('fs');
const value = `5
9 6
4 6 8
0 7 1 5
9 3 3 5`;

const getMaximumTotal = (filePath) => {
  //reading string from the file
  const triangle = fs.readFileSync(filePath,{encoding:'utf8'});
  const lineList = [];
  //creating new array for each line and pushing to the lineList array.
  let lines = triangle.split('\n');
  for(let i=0;i<lines.length;i++) {
    const arr = lines[i].split(' ');
    lineList.push(arr);
  }

  let sum = parseInt(lineList[0]);
  let currentIndex = 0;

  for(let i =1; i< lineList.length;i++) {
    // if the index of the value from last line is 0 compare between the values in index 0 and 1 of current line
    if(currentIndex === 0) {
      const leftValue = parseInt(lineList[i][currentIndex]);
      const rightValue = parseInt(lineList[i][currentIndex +1]);

      if(leftValue > rightValue) {
        sum += leftValue;
      }else {
        sum += rightValue;
        currentIndex += 1;
      }
    }else {
      // if index of value from last line is greater than 0 compare among 3 closest values.
      const leftValue = parseInt(lineList[i][currentIndex-1]);
      const center = parseInt(lineList[i][currentIndex]);
      const rightValue = parseInt(lineList[i][currentIndex +1]);
      if(leftValue > rightValue && leftValue > center) {
        sum += leftValue;
        currentIndex -= 1;
      } else if(rightValue > leftValue && rightValue > center) {
        sum += rightValue;
        currentIndex += 1;
      }else {
        sum += center;
      }
    }
  }

  console.log('sum', sum);
  return sum;
}

getMaximumTotal('./input.txt');
