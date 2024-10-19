const display = document.querySelector('#display');

function appendToDisplay(input)
{
display.value +=input;
}
function appendDelete()
{
    display.value = display.value.toString().slice(0,-1);
}
function clearDisplay()
{
    display.value = "";
}
function calculate()
{
    try
    {
    display.value = eval(display.value);
}
catch(error)
{
    display.value = "error";
}
}