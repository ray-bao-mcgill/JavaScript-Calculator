JavaScript Scientific Calculator

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
