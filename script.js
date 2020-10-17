var resultVisual = document.querySelector("#res")
var clickables = document.querySelectorAll('.clickable');
var num1 = '';
var num2 = '';
var resultNumber = 0;
var action = '';



function sum(p1,p2){
    return parseInt(p1)+ parseInt(p2);
}
function multiply(p1,p2){
    return parseFloat(p1)*parseFloat(p2);
}
function divide(p1,p2) {
    return parseFloat(p1)/parseFloat(p2);
}
function substract(p1,p2) {
    return parseInt(p1)-parseInt(p2);
}
clickables.forEach((elem) => {
    elem.addEventListener("click", function clickButton() {
        if (num2 === ''){
            document.getElementById('op-eq').disabled = true;
        }
        if (this.dataset.val == "ac") {
            resultVisual.textContent ='RES';
            num1 = '';
            num2 = '';
            resultNumber = 0;
            document.getElementById('op-eq').disabled = false;
        }
        else if (this.dataset.val !== "+" && this.dataset.val !== '=' && this.dataset.val !== '*' && this.dataset.val !== '/' && this.dataset.val !== '-') {
            if (action === '')
            {
                num1 += this.dataset.val;
                resultVisual.textContent = num1;
            }
            else
            {   
                num2 += this.dataset.val;
                resultVisual.textContent = num2;
                document.getElementById('op-eq').disabled = false;
            }
        }
        else if (this.dataset.val == "+"){
            resultVisual.textContent = "+";
            action = "+";
        }
        else if (this.dataset.val == "*") {
            resultVisual.textContent= '*';
            action = '*';
        }
        else if (this.dataset.val == '/') {
            resultVisual.textContent = '/';
            action = '/';
        }
        else if (this.dataset.val == '-'){
            resultVisual.textcontent = '-';
            action = '-';
        }
        if (this.dataset.val == "=" && action == "+"){
            resultVisual.textContent = sum(num1,num2);
            num1 = parseInt(resultVisual.textContent);
            num2 = '';
            action = '';
        }
        else if(this.dataset.val == '=' && action == '*'){
            resultVisual.textContent = multiply(num1,num2);
            num1 = parsefloat(resultVisual.textContent);
            num2 = '';
            action = '';
        }
        else if(this.dataset.val == '=' && action == '/'){
            resultVisual.textContent = divide(num1,num2);
            num1 = parseFloat(resultVisual.textContent);
            num2 = '';
            action = '';
        }
        else if(this.dataset.val == '=' && action == '-'){
            resultVisual.textContent = substract(num1,num2);
            num1 = parseInt(resultVisual.textContent);
            num2 = '';
            action = '';
        }
    });
})