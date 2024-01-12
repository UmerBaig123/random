function submit(){
    var num1 = document.getElementById("num1").value;
    var op = document.getElementById("op").value;
    var num2 = document.getElementById("num2").value;
    switch (op) {
        case '+':
            alert(num1+num2)
            break;
        case '-':
            alert(num1-num2)
            break;
        case '*':
            alert(num1*num2)
            break;
        case '/':
            alert(num1/num2)
            break;
    
        default:
            break;
    }
}