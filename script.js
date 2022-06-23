let firstNumber = parseInt (prompt ('Number1: '));
let operator = prompt ('Calculate: (+, -, *, /) ');
let secondNumber = parseInt (prompt('Number2: '));



if  (operator == '+')
 {
    result = firstNumber + secondNumber;
   

}
else if (operator == '-') 
{
    result = firstNumber - secondNumber;

}
else if (operator == '/') 
{
    result = firstNumber / secondNumber;

}
else if (operator == '*')
{
    result = firstNumber * secondNumber;
}

alert  (firstNumber + ' ' + operator + ' ' + secondNumber + ' ' + ' = ' + result)
