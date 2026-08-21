function show(value){
    document.getElementById("inputbox").value+=value
}
function cs(){
    document.getElementById("inputbox").value= ""
}
function addOperator(operator){
    document.getElementById("inputbox").value +=operator
}
function calculate(value){
   let expression=document.getElementById("inputbox").value
   document.getElementById("inputbox").value = eval(expression);
}