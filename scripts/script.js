/*
<!-- RAYS CALCULATOR-->
<!-- RAYS CALCULATOR-->
<!-- RAYS CALCULATOR-->
<!-- RAYS CALCULATOR-->
<!-- RAYS CALCULATOR-->
<!-- RAYS CALCULATOR-->
<!-- RAYS CALCULATOR-->
<!-- RAYS CALCULATOR-->
<!-- RAYS CALCULATOR-->
<!--
Notes:

Functionality:
        {
        Fully functional order of operations including brackets:
        ex. 325^34-(sin(90)+4)(17)


        Smart multiplication:
              ex.
              (3)(4) = 12
              4pi = 12.etc
              4sin(90) = 4


        +/- toggle button:
              ex.
              24(-
              24


        Inverse and regular trigonometric functions:
              sin(
              arcsin(


        Degree and radian options:
              sin(degrees)
              sin(radians)


        Fully functional decimals, zeroes, and operators
              ex.
              0...43   not possible
              98**++-/ not possible
              000444   not possible


        ANS button takes previous answer as long as it is valid
              ex.
              prevAn = 124
              124 + ANS = 248


        Fully functional memory feature
              ex.
              65 (m+)
              32 (m-)
              33 (mr)
              0  (mc)
              impossible to repeatedly call same recorded memory
        }

General concept::
      Essentially the calculator works by evaluating a
      string that the user writes using the various
      buttons and functions on the calculator.

      How it works (Generally scroll down further for specific functions):
      Three main variables: input output and display

      Everytime a button is clicked it's function (ex. 3, multiply, sine) is added
      to a string saved in input and the visual aspect is added to display.

      For example when you click sin,
      the string:

      Math.sin((Math.PI/180)*

      is added to var input // the reason the bracket is not closed is so that the user can then enter the value that they want.
      however only

      sin(

      is added to var display
      var output is not changed until you hit =

      = evaluates the string using eval() and sets display equal to output which prints the result.

      While it displays the output, input and display are actually also cleared and set to "".
      Because it will only clear display if you press =, the user is free to restart immediately without clearing the
      entire calculator.


ANS:
    Until equals is called, the previous output is stored in var output.
    This function adds that to the running string




Trigonometry:
    Each trigonometric button contains in fact 4 different conditions inside controlled by a combination
    of whether the second function button is pressed and whether the calculator is in degrees or radians.

    if measure is set to 1, the calculator calculates in degrees
        set to 0, the calculator calculates in radians

    if secondFunction is set to 1, the calculator performs regular trig functions
            is set to 0, the calculator performs inverse trig functions




Memory:
    M+ adds to the recorded memory
    M- subtracts from the recorded memory
    MR recalls the recorded memory and allows the user to modify it
    MC clears the recorded memory

    In order to prevent the user from accidentally calling the recorded memory twice
    (ex. memory = 109// called twice: 109109)
    the variable memoryGate controls whether or not the user can effectively call the recorded
    memory.

    Everytime recorded memory is called, memoryGate is set to 0, and can no longer be called again.
    only operators (ex. x, +, sin, ANS, (, arctan() can reset memoryGate to 1 and allow you to call
    recorded memory again




Decimals and Zero:
    Decimals and Zero are tricky because of the rules they must obey.
    (ex. 003, 0..5, 0.0.5, ..50)
    They work through a series of if statements that give them very specific conditions.

    Decimal uses a variable called decimalGate which is set to 1 by all operators & clearScreen.
    This allows decimals to be used again,
    otherwise the entire string can only contain one decimal as the decimal
    function sets decimalGate to 0 every time it is called.

    zeroGate works similarily. All operators set zeroGate to zero
    which only allows one zero to be printed
    directly after
    (ex. 0.23+0.01 as opposed to 0.23+001)
    The decimal function resets this Gate to 1 and allows unlimited 0s until the next operator
    is pressed.



Debugging:
    If debug is active, console will log all relevant variables until it is stopped.

-->
*/

/* refer to comments at the top of the page for clarifications*/
var display = ""
var input = ""
var output
var memory = 0
var memoryGate = 1
var zeroGate = 1
var decimalGate = 1
var secondFunction = 1
var measure = 1
var consoleBugs = 0

function one() {
  memoryGate = 0

  if ((input.length == 1) && (input == "0")) {
      input = ""
      display = ""
  }
  if (input.charAt(input.length - 1) == "I") {
      input += "*"
  }
  if (input.charAt(input.length - 1) == ")") {
      input += "*"
  }
  input += "1"
  display += "1"
  document.getElementById('input').innerHTML = display
}

function two() {
  memoryGate = 0

  if ((input.length == 1) && (input == "0")) {
      input = ""
      display = ""
  }
  if (input.charAt(input.length - 1) == "I") {
      input += "*"
  }
  if (input.charAt(input.length - 1) == ")") {
      input += "*"
  }
  input += "2"
  display += "2"
  document.getElementById('input').innerHTML = display
}

function three() {
  memoryGate = 0

  if ((input.length == 1) && (input == "0")) {
      input = ""
      display = ""
  }
  if (input.charAt(input.length - 1) == "I") {
      input += "*"
  }
  if (input.charAt(input.length - 1) == ")") {
      input += "*"
  }
  input += "3"
  display += "3"
  document.getElementById('input').innerHTML = display
}

function four() {
  memoryGate = 0

  if ((input.length == 1) && (input == "0")) {
      input = ""
      display = ""
  }
  if (input.charAt(input.length - 1) == "I") {
      input += "*"
  }
  if (input.charAt(input.length - 1) == ")") {
      input += "*"
  }
  input += "4"
  display += "4"
  document.getElementById('input').innerHTML = display
}

function five() {
  memoryGate = 0

  if ((input.length == 1) && (input == "0")) {
      input = ""
      display = ""
  }
  if (input.charAt(input.length - 1) == "I") {
      input += "*"
  }
  if (input.charAt(input.length - 1) == ")") {
      input += "*"
  }
  input += "5"
  display += "5"
  document.getElementById('input').innerHTML = display
}

function six() {
  memoryGate = 0

  if ((input.length == 1) && (input == "0")) {
      input = ""
      display = ""
  }
  if (input.charAt(input.length - 1) == "I") {
      input += "*"
  }
  if (input.charAt(input.length - 1) == ")") {
      input += "*"
  }
  input += "6"
  display += "6"
  document.getElementById('input').innerHTML = display
}

function seven() {
  memoryGate = 0

  if ((input.length == 1) && (input == "0")) {
      input = ""
      display = ""
  }
  if (input.charAt(input.length - 1) == "I") {
      input += "*"
  }
  if (input.charAt(input.length - 1) == ")") {
      input += "*"
  }
  input += "7"
  display += "7"
  document.getElementById('input').innerHTML = display
}

function eight() {
  memoryGate = 0

  if ((input.length == 1) && (input == "0")) {
      input = ""
      display = ""
  }
  if (input.charAt(input.length - 1) == "I") {
      input += "*"
  }
  if (input.charAt(input.length - 1) == ")") {
      input += "*"
  }
  input += "8"
  display += "8"
  document.getElementById('input').innerHTML = display
}

function nine() {
  memoryGate = 0

  if ((input.length == 1) && (input == "0")) {
      input = ""
      display = ""
  }
  if (input.charAt(input.length - 1) == "I") {
      input += "*"
  }
  if (input.charAt(input.length - 1) == ")") {
      input += "*"
  }
  input += "9"
  display += "9"
  document.getElementById('input').innerHTML = display
}

function zero() {
  memoryGate = 0

if (zeroGate == 1) {
  if ((input.length == 1) && (input == "0")) {
      input = ""
      display = ""
  }
  if (input.charAt(input.length - 1) == "I") {
      input += "*0"
  }
      if (input.charAt(input.length - 1) == ")") {
          input += "*0"
          display += "0"
          document.getElementById('input').innerHTML = display
      }
      if (input.charAt(input.length - 1) == "") {
          input += "0"
          display += "0"
          document.getElementById('input').innerHTML = display
      } else {
          if (input.charAt(0) !== "0" || input.includes('.') == true) {
              input += "0"
              display += "0"
              document.getElementById('input').innerHTML = display
          }
        }
  }

  if (zeroGate == 0) {
    if ((input.length == 1) && (input == "0")) {
        input = ""
        display = ""
    }
    if (input.charAt(input.length - 1) == "I") {
        input += "*0"
    }
        if (input.charAt(input.length - 1) == ")") {
            input += "*0"
            display += "0"
            document.getElementById('input').innerHTML = display
        }
    else if (isNaN(Number(input.charAt(input.length - 1))) == true){
      input += "0"
      display += "0"
      document.getElementById('input').innerHTML = display
    }
    if((isNaN(Number(input.charAt(input.length - 1))) == false) && (input.charAt(input.length-1) !== "0")){
      input += "0"
      display += "0"
      zeroGate=1
      document.getElementById('input').innerHTML = display
    }
    }
  }


function pie() {
  memoryGate = 0
  if (input.charAt(input.length - 1) == "I") {
      input += "*"
  }
  if ((input.charAt(input.length - 1) == ")")) {
      input += "*"
  }
  if ((isNaN(Number(input.charAt(input.length - 1))) == false) && (input.charAt(input.length - 1) !== "")) {
      input += "*Math.PI"
      display += "&pi;"
      document.getElementById('input').innerHTML = display
  } else {
      input += "Math.PI"
      display += "&pi;"
      document.getElementById('input').innerHTML = display
  }
}

function decimal() {
  if (decimalGate == 1) {
      memoryGate = 0
      zeroGate = 1
      if ((input.charAt(input.length - 1) == ".") ||
          (input.charAt(input.length - 1) == "+") ||
          (input.charAt(input.length - 1) == "-") ||
          (input.charAt(input.length - 1) == "*") ||
          (input.charAt(input.length - 1) == "/") ||
          (input.charAt(input.length - 1) == "") ||
          (input.charAt(input.length - 1) == "(")) {} else {
          input += "."
          display += "."
          document.getElementById('input').innerHTML = display
          decimalGate = 0
      }
  } else {}
}
/* refer to comments at the top of the page for clarifications*/
function add() {
  memoryGate = 1
  zeroGate = 0
  if ((input.charAt(input.length - 1) == "+") ||
      (input.charAt(input.length - 1) == "-") ||
      (input.charAt(input.length - 1) == "*") ||
      (input.charAt(input.length - 1) == "/") ||
      (input.charAt(input.length - 1) == "") ||
      (input.charAt(input.length - 1) == "(") ||
      (display.charAt(display.length - 1) == "^") ||
      (input.charAt(input.length - 1) == ".")) {

  } else {
      input += "+"
      display += "+"
      document.getElementById('input').innerHTML = display
      decimalGate = 1
  }
}

function subtract() {
  memoryGate = 1
  zeroGate = 0
  if ((input.charAt(input.length - 1) == "+") ||
      (input.charAt(input.length - 1) == "-") ||
      (input.charAt(input.length - 1) == "*") ||
      (input.charAt(input.length - 1) == "/") ||
      (input.charAt(input.length - 1) == "") ||
      (input.charAt(input.length - 1) == "(") ||
      (display.charAt(display.length - 1) == "^") ||
      (input.charAt(input.length - 1) == ".")) {

  } else {
      input += "-"
      display += "-"
      document.getElementById('input').innerHTML = display
      decimalGate = 1
  }
}

function multiply() {
  memoryGate = 1
  zeroGate = 0
  if ((input.charAt(input.length - 1) == "+") ||
      (input.charAt(input.length - 1) == "-") ||
      (input.charAt(input.length - 1) == "*") ||
      (input.charAt(input.length - 1) == "/") ||
      (input.charAt(input.length - 1) == "") ||
      (display.charAt(display.length - 1) == "^") ||
      (input.charAt(input.length - 1) == "(") ||
      (input.charAt(input.length - 1) == ".")) {

  } else {
      input += "*"
      display += "x"
      document.getElementById('input').innerHTML = display
      decimalGate = 1
  }
}
/* refer to comments at the top of the page for clarifications*/
function divide() {
  memoryGate = 1
  zeroGate = 0
  if ((input.charAt(input.length - 1) == "+") ||
      (input.charAt(input.length - 1) == "-") ||
      (input.charAt(input.length - 1) == "*") ||
      (input.charAt(input.length - 1) == "/") ||
      (input.charAt(input.length - 1) == "") ||
      (display.charAt(display.length - 1) == "^") ||
      (input.charAt(input.length - 1) == "(") ||
      (input.charAt(input.length - 1) == ".")) {

  } else {
      input += "/"
      display += "/"
      document.getElementById('input').innerHTML = display
      decimalGate = 1
  }
}

function powerOf() {
  memoryGate = 1
  zeroGate = 0
  if ((input.charAt(input.length - 1) == "+") ||
      (input.charAt(input.length - 1) == "-") ||
      (input.charAt(input.length - 1) == "*") ||
      (input.charAt(input.length - 1) == "/") ||
      (input.charAt(input.length - 1) == "") ||
      (display.charAt(display.length - 1) == "^") ||
      (input.charAt(input.length - 1) == "(") ||
      (input.charAt(input.length - 1) == ".")) {

  } else {
      input += "**"
      display += "^"
      document.getElementById('input').innerHTML = display
      decimalGate = 1
  }
}

function opBR() {
  memoryGate = 1
  zeroGate = 0
  if ((isNaN(input.charAt(input.length - 1)) == false) || (input.charAt(input.length - 1) == ")")) {
      if ((input.charAt(input.length - 1) == "+") ||
          (input.charAt(input.length - 1) == "-") ||
          (input.charAt(input.length - 1) == "*") ||
          (input.charAt(input.length - 1) == "/") ||
          (input.charAt(input.length - 1) == "") ||
          (display.charAt(display.length - 1) == "^") ||
          (input.charAt(input.length - 1) == "(") ||
          (input.charAt(input.length - 1) == ".")) {
          input += "("
          display += "("
          document.getElementById('input').innerHTML = display
          decimalGate = 1
      } else {
          input += "*("
          display += "("
          document.getElementById('input').innerHTML = display
          decimalGate = 1
      }
  } else {

      if (input.charAt(input.length - 1) == ".") {} else {

          if (input.charAt(input.length - 1) == "I") {
              input += "*("
              display += "("
              document.getElementById('input').innerHTML = display
              decimalGate = 1
          } else {
              input += "("
              display += "("
              document.getElementById('input').innerHTML = display
              decimalGate = 1
          }
      }
  }
}
/* refer to comments at the top of the page for clarifications*/
function closeBR() {

  if (input.includes('(') == true) {
      memoryGate = 1
  }

  input += ")"
  display += ")"
  document.getElementById('input').innerHTML = display
  decimalGate = 1
  zeroGate = 0
}

function prevAN() {
zeroGate = 0
  if ((input.charAt(input.length - 1) == "+") ||
      (input.charAt(input.length - 1) == "") ||
      (input.charAt(input.length - 1) == "-") ||
      (input.charAt(input.length - 1) == "*") ||
      (input.charAt(input.length - 1) == "(") ||
      (display.charAt(display.length - 1) == "^") ||
      (input.charAt(input.length - 1) == "/")) {

      if ((output !== NaN) && (output !== undefined)) {
          input += output
          display += "ANS"
          document.getElementById('input').innerHTML = display
      } else if ((input.charAt(input.length - 1) == ")")) {
          input += "*" + output
          display += "ANS"
          document.getElementById('input').innerHTML = display
      } else {

      }
  } else {}

}
/* refer to comments at the top of the page for clarifications*/
function sine() {
  memoryGate = 1
  decimalGate = 1
  zeroGate = 0
  if (secondFunction == 1) {
      if (measure == 1) {
          if (input.charAt(input.length - 1) == "I") {
              input += "*"
          }
          if ((input.charAt(input.length - 1) == ")")) {
              input += "*"
          }
          if ((isNaN(Number(input.charAt(input.length - 1)))) == false && (input.length > 0)) {
              input += "*"
          }
          input += "Math.sin((Math.PI/180)*"
          display += "sin("
          document.getElementById('input').innerHTML = display
      } else if (measure == 0) {
          if (input.charAt(input.length - 1) == "I") {
              input += "*"
          }
          if ((input.charAt(input.length - 1) == ")")) {
              input += "*"
          }
          if ((isNaN(Number(input.charAt(input.length - 1)))) == false && (input.length > 0)) {
              input += "*"
          }
          input += "Math.sin("
          display += "sin("
          document.getElementById('input').innerHTML = display

      }
  } else if (secondFunction == 0) {
      if (measure == 1) {
          if (input.charAt(input.length - 1) == "I") {
              input += "*"
          }
          if ((input.charAt(input.length - 1) == ")")) {
              input += "*"
          }
          if ((isNaN(Number(input.charAt(input.length - 1)))) == false && (input.length > 0)) {
              input += "*"
          }

          input += "(180/Math.PI)*Math.asin("
          display += "arcsin("
          document.getElementById('input').innerHTML = display

      } else if (measure == 0) {
          if (input.charAt(input.length - 1) == "I") {
              input += "*"
          }
          if ((input.charAt(input.length - 1) == ")")) {
              input += "*"
          }
          if ((isNaN(Number(input.charAt(input.length - 1)))) == false && (input.length > 0)) {
              input += "*"
          }
          input += "Math.asin("
          display += "arcsin("
          document.getElementById('input').innerHTML = display

      }
  }

}
/* refer to comments at the top of the page for clarifications*/
function cosine() {
  memoryGate = 1
  decimalGate = 1
  zeroGate = 0
  if (secondFunction == 1) {
      if (measure == 1) {
          if (input.charAt(input.length - 1) == "I") {
              input += "*"
          }
          if ((input.charAt(input.length - 1) == ")")) {
              input += "*"
          }
          if ((isNaN(Number(input.charAt(input.length - 1)))) == false && (input.length > 0)) {
              input += "*"
          }
          input += "Math.cos((Math.PI/180)*"
          display += "cos("
          document.getElementById('input').innerHTML = display

      } else if (measure == 0) {
          if (input.charAt(input.length - 1) == "I") {
              input += "*"
          }
          if ((input.charAt(input.length - 1) == ")")) {
              input += "*"
          }
          if ((isNaN(Number(input.charAt(input.length - 1)))) == false && (input.length > 0)) {
              input += "*"
          }
          input += "Math.cos("
          display += "cos("
          document.getElementById('input').innerHTML = display

      }
  } else if (secondFunction == 0) {
      if (measure == 1) {
          if (input.charAt(input.length - 1) == "I") {
              input += "*"
          }
          if ((input.charAt(input.length - 1) == ")")) {
              input += "*"
          }
          if ((isNaN(Number(input.charAt(input.length - 1)))) == false && (input.length > 0)) {
              input += "*"
          }
          input += "(180/Math.PI)*Math.acos("
          display += "arccos("
          document.getElementById('input').innerHTML = display

      } else if (measure == 0) {
          if (input.charAt(input.length - 1) == "I") {
              input += "*"
          }
          if ((input.charAt(input.length - 1) == ")")) {
              input += "*"
          }
          if ((isNaN(Number(input.charAt(input.length - 1)))) == false && (input.length > 0)) {
              input += "*"
          }
          input += "Math.acos("
          display += "arccos("
          document.getElementById('input').innerHTML = display

      }
  }

}

/* refer to comments at the top of the page for clarifications*/
function tangent() {
  memoryGate = 1
  decimalGate = 1
  zeroGate = 0
  if (secondFunction == 1) {
      if (measure == 1) {
          if (input.charAt(input.length - 1) == "I") {
              input += "*"
          }
          if ((input.charAt(input.length - 1) == ")")) {
              input += "*"
          }
          if ((isNaN(Number(input.charAt(input.length - 1)))) == false && (input.length > 0)) {
              input += "*"
          }
          input += "Math.tan((Math.PI/180)*"
          display += "tan("
          document.getElementById('input').innerHTML = display
      } else if (measure == 0) {
          if (input.charAt(input.length - 1) == "I") {
              input += "*"
          }
          if ((input.charAt(input.length - 1) == ")")) {
              input += "*"
          }
          if ((isNaN(Number(input.charAt(input.length - 1)))) == false && (input.length > 0)) {
              input += "*"
          }
          input += "Math.tan("
          display += "tan("
          document.getElementById('input').innerHTML = display

      }
  } else if (secondFunction == 0) {
      if (measure == 1) {
          if (input.charAt(input.length - 1) == "I") {
              input += "*"
          }
          if ((input.charAt(input.length - 1) == ")")) {
              input += "*"
          }
          if ((isNaN(Number(input.charAt(input.length - 1)))) == false && (input.length > 0)) {
              input += "*"
          }
          input += "(180/Math.PI)*Math.atan("
          display += "arctan("
          document.getElementById('input').innerHTML = display

      } else if (measure == 0) {
          if (input.charAt(input.length - 1) == "I") {
              input += "*"
          }
          if ((input.charAt(input.length - 1) == ")")) {
              input += "*"
          }
          if ((isNaN(Number(input.charAt(input.length - 1)))) == false && (input.length > 0)) {
              input += "*"
          }
          input += "Math.atan("
          display += "arctan("
          document.getElementById('input').innerHTML = display

      }
  }

}

function removeLast() {

  if (display.charAt(display.length - 1) == "^") {
      input = input.slice(0, -2)
      display = display.slice(0, -1)
      document.getElementById('input').innerHTML = display
  } else if ((input.charAt(input.length - 1) == "(") && (input.charAt(input.length - 2) == "*")) {
      if (display.charAt(display.length - 2) == "x") {
          input = input.slice(0, -1)
          display = display.slice(0, -1)
          document.getElementById('input').innerHTML = display
      } else {
          input = input.slice(0, -2)
          display = display.slice(0, -1)
          document.getElementById('input').innerHTML = display
      }
  } else if ((input.charAt(input.length - 1) == "I") && (input.charAt(input.length - 2) == "P")) {
      if (input.charAt(input.length - 8) == "*") {
          input = input.slice(0, -8)
          display = display.slice(0, -4)
      } else {
          input = input.slice(0, -7)
          display = display.slice(0, -4)
      }
      document.getElementById('input').innerHTML = display
  } else if ((input.charAt(input.length - 16) == "n") && (input.charAt(input.length - 17) == "i") && (input.charAt(input.length - 18) == "s")) {
      if (input.charAt(input.length - 24) == "*") {
          input = input.slice(0, -24)
          display = display.slice(0, -4)
      } else {
          input = input.slice(0, -23)
          display = display.slice(0, -4)
      }
      document.getElementById('input').innerHTML = display
  } else if ((input.charAt(input.length - 16) == "s") && (input.charAt(input.length - 17) == "o") && (input.charAt(input.length - 18) == "c")) {
      if (input.charAt(input.length - 24) == "*") {
          input = input.slice(0, -24)
          display = display.slice(0, -4)
      } else {
          input = input.slice(0, -23)
          display = display.slice(0, -4)
      }
      document.getElementById('input').innerHTML = display
  } else if ((input.charAt(input.length - 16) == "n") && (input.charAt(input.length - 17) == "a") && (input.charAt(input.length - 18) == "t")) {
      if (input.charAt(input.length - 24) == "*") {
          input = input.slice(0, -24)
          display = display.slice(0, -4)
      } else {
          input = input.slice(0, -23)
          display = display.slice(0, -4)
      }
      document.getElementById('input').innerHTML = display
  } else if ((input.charAt(input.length - 2) == "n") && (input.charAt(input.length - 3) == "i") && (input.charAt(input.length - 4) == "s") && (input.charAt(input.length - 5) == "a")) {
      if (input.charAt(input.length - 25) == "*") {
          input = input.slice(0, -25)
          display = display.slice(0, -7)
      } else {
          input = input.slice(0, -24)
          display = display.slice(0, -7)
      }
      document.getElementById('input').innerHTML = display
  } else if ((input.charAt(input.length - 2) == "s") && (input.charAt(input.length - 3) == "o") && (input.charAt(input.length - 4) == "c") && (input.charAt(input.length - 5) == "a")) {
      if (input.charAt(input.length - 25) == "*") {
          input = input.slice(0, -25)
          display = display.slice(0, -7)
      } else {
          input = input.slice(0, -24)
          display = display.slice(0, -7)
      }
      document.getElementById('input').innerHTML = display
  } else if ((input.charAt(input.length - 2) == "n") && (input.charAt(input.length - 3) == "a") && (input.charAt(input.length - 4) == "t") && (input.charAt(input.length - 5) == "a")) {
      if (input.charAt(input.length - 25) == "*") {
          input = input.slice(0, -25)
          display = display.slice(0, -7)
      } else {
          input = input.slice(0, -24)
          display = display.slice(0, -7)
      }
      document.getElementById('input').innerHTML = display
  } else if ((input.charAt(input.length - 1) == "(") && (input.charAt(input.length - 2) == "n") && (input.charAt(input.length - 3) == "i") && (input.charAt(input.length - 4) == "s")) {
      if (input.charAt(input.length - 10) == "*") {
          input = input.slice(0, -10)
          display = display.slice(0, -4)
      } else {
          input = input.slice(0, -9)
          display = display.slice(0, -4)
      }
      document.getElementById('input').innerHTML = display
  } else if ((input.charAt(input.length - 1) == "(") && (input.charAt(input.length - 2) == "s") && (input.charAt(input.length - 3) == "o") && (input.charAt(input.length - 4) == "c")) {
      if (input.charAt(input.length - 10) == "*") {
          input = input.slice(0, -10)
          display = display.slice(0, -4)
      } else {
          input = input.slice(0, -9)
          display = display.slice(0, -4)
      }
      document.getElementById('input').innerHTML = display
  } else if ((input.charAt(input.length - 1) == "(") && (input.charAt(input.length - 2) == "n") && (input.charAt(input.length - 3) == "a") && (input.charAt(input.length - 4) == "t")) {
      if (input.charAt(input.length - 10) == "*") {
          input = input.slice(0, -10)
          display = display.slice(0, -4)
      } else {
          input = input.slice(0, -9)
          display = display.slice(0, -4)
      }
      document.getElementById('input').innerHTML = display
  } else if ((input.charAt(input.length - 3) == "I") && (input.charAt(input.length - 2) == "*") && (display.charAt(display.length - 2) == ";")) {
      input = input.slice(0, -2)
      display = display.slice(0, -1)
      document.getElementById('input').innerHTML = display
  } else if ((input.charAt(input.length - 2) == "*") && (input.charAt(input.length - 3) == ")") && (input.charAt(input.length - 19) !== "s") &&
      (input.charAt(input.length - 19) !== "c") && (input.charAt(input.length - 19) !== "t")) {
      input = input.slice(0, -2)
      display = display.slice(0, -1)
      document.getElementById('input').innerHTML = display
  } else {
      input = input.slice(0, -1)
      display = display.slice(0, -1)
      document.getElementById('input').innerHTML = display

      if (display.charAt(0) == "") {
          input = ""
          display = ""
          document.getElementById('input').innerHTML = "0"
      }
  }
}
/* refer to comments at the top of the page for clarifications*/
function second() {
  if (secondFunction == 1) {
      secondFunction = 0;
      document.getElementById('second').style.background = "white"
      document.getElementById('second').style.color = "black"
      document.getElementById('sine').innerHTML = "asin"
      document.getElementById('cosine').innerHTML = "acos"
      document.getElementById('tangent').innerHTML = "atan"
  } else if (secondFunction == 0) {
      secondFunction = 1;
      document.getElementById('second').style.background = "#4C2A85"
      document.getElementById('second').style.color = "white"
      document.getElementById('sine').innerHTML = "sin"
      document.getElementById('cosine').innerHTML = "cos"
      document.getElementById('tangent').innerHTML = "tan"
  }
}

function DegRad() {
  if (measure == 1) {
      measure = 0;
      document.getElementById('measure').style.background = "white"
      document.getElementById('measure').style.color = "black"
      document.getElementById('measure').innerHTML = "RAD"
  } else if (measure == 0) {
      measure = 1;
      document.getElementById('measure').style.background = "#4C2A85"
      document.getElementById('measure').innerHTML = "DEG"
      document.getElementById('measure').style.color = "white"
  }
}

function plusminus() {
  decimalGate = 1
  memoryGate = 1
  zeroGate = 0
  if ((input.charAt(input.length - 1) == "-") && (input.charAt(input.length - 2) == "(")) {
      if ((input.charAt(input.length - 3) == "*") && (display.charAt(display.length - 3) !== "x")) {
          input = input.slice(0, -3)
          display = display.slice(0, -2)
          document.getElementById('input').innerHTML = display
      } else {
          input = input.slice(0, -2)
          display = display.slice(0, -2)
          document.getElementById('input').innerHTML = display
      }
  } else if (((isNaN(Number(input.charAt(input.length - 1)))) == false && (input.length > 0)) || (input.charAt(input.length - 1) == "I") || (input.charAt(input.length - 1) == ")")) {
      input += "*(-"
      display += "(-"
      document.getElementById('input').innerHTML = display
  } else {
      input += "(-"
      display += "(-"
      document.getElementById('input').innerHTML = display
  }
}

function equals() {
  decimalGate = 1
  memoryGate = 1
  zeroGate = 0

  if ((input.charAt(input.length - 1) == "+") ||
      (input.charAt(input.length - 1) == "-") ||
      (input.charAt(input.length - 1) == "(") ||
      (input.charAt(input.length - 1) == "^") ||
      (input.charAt(input.length - 1) == "*") ||
      (input.charAt(input.length - 1) == "/") ||
      (input.charAt(input.length - 1) == "") ||
      (input.charAt(input.length - 1) == ".")) {
      document.getElementById('input').innerHTML = output
  } else {
      output = eval(input)
      input = ""
      display = ""
      if (output == 6.123233995736766e-17) {
          output = 0
          document.getElementById('input').innerHTML = output
      } else if (output == 0.9999999999999999) {
          output = 1
          document.getElementById('input').innerHTML = output
      } else if (output == 16331239353195370) {
          output = 0
          document.getElementById('input').innerHTML = output
      } else if ((isNaN(output) == false) && (isFinite(output) == true)) {

          document.getElementById('input').innerHTML = output
      } else {

          document.getElementById('input').innerHTML = "That value is undefined"
      }
  }
}

/* refer to comments at the top of the page for clarifications*/

function memAdd() {
  memory += eval(input)
  input = ""
  display = ""
  memoryGate = 1
  decimalGate = 1
  zeroGate = 0
  document.getElementById('input').innerHTML = display
}

function memRemove() {
  memory -= eval(input)
  input = ""
  display = ""
  memoryGate = 1
  decimalGate = 1
  zeroGate = 0
  document.getElementById('input').innerHTML = display
}

function memRecall() {
  if (memoryGate == 1) {
      input += String(memory)
      display += String(memory)
      document.getElementById('input').innerHTML = display
      memoryGate = 0
      decimalGate = 0
      zeroGate = 0
  } else {}
}
/* refer to comments at the top of the page for clarifications*/
function memClear() {
  memory = 0
  document.getElementById('input').innerHTML = display
}

function clearScreen() {
  input = ""
  display = ""
  document.getElementById('input').innerHTML = "0"
  memoryGate = 1
  decimalGate = 1
}

var bugCheck;

function DebugBugs() {
  if (consoleBugs == 0) {
      document.getElementById('statusDebug').innerHTML = "Active"
      consoleBugs = 1
      alert('Console now logging all variables every 5s. Click again to disable.')
      bugCheck = setInterval(function CheckForBug() {
          console.log("input: " + input)
          console.log("output: " + output)
          console.log("display: " + display)
          console.log("memoryStatus: " + memoryGate)
          console.log("decimalStatus: " + decimalGate)
          console.log("2ndStatus: " + secondFunction)
          console.log("measureStatus: " + measure)
      }, 5000)
      console.warn("started")
  } else if (consoleBugs == 1) {
      document.getElementById('statusDebug').innerHTML = "Stopped"
      consoleBugs = 0
      alert('Console no longer logging variables.')
      clearInterval(bugCheck)
      console.warn("stopped")
  }
}

/* refer to comments at the top of the page for clarifications*/