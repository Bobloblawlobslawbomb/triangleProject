function isTriangle() {
  let sideA = 5;
  let sideB = 4;
  let sideC = 3;
  if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    alert("please enter valid integers to properly evaluate")
    //more code to allow user to resubmit
  }
  else if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideC + sideA <= sideB) {
    alert("NOT a triangle");
  }
  else if (sideA === sideB && sideA === sideC) {
    alert("equilateral")
  } else if (sideA != sideB && sideA === sideC) {
    alert("isosceles, B sucks")
  } else if (sideA != sideB && sideB === sideC) {
    alert("isosceles, A sucks")
  } else if (sideB != sideC && sideA === sideB) {
    alert("isosceles, C sucks")
  }
  else if (sideA != sideB && sideB != sideC && sideA != sideC) {
    alert("Scalene triangle")//isoceles or equilateral or scalene
  }
  /*else if (sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB) {
    alert("JUST a triangle") //is a triangle it seems this is inneccessary as we have already defined "triangles" with 0,1,2,and 3 of the same length sides
  }*/

  else {

    alert("dunno how we got here") //catch bad values
  }
}
isTriangle() //to test the function

/**/

/*(*a*a)+(b*b)=(c*c)*/



/*user interface logic*/


/* user inputs triangle sides*/


