let res = document.querySelector("#res")
let clickables = document.querySelectorAll('.clickable');
var num1 = 0;
var num2 = 0;
var num3 = 0;
var number = 0;
var action;
function sum(p1,p2){
    return p1+p2;
}

clickables.forEach((elem) => {
    elem.addEventListener("click", function clickButton(button) {
        if (this.dataset.val == "ac") {
            res.textContent = 0;
            num1=0;
            number=0;
        }
        else if (this.dataset.val !== "+") {
            number+=this.dataset.val;
            res.textContent = number;
        }
            else if (this.dataset.val == "+"){
                res.textContent = "+"
                number=num1;
                num1=+num1;
                number = 0;
                action = "+";
            }
        if (this.dataset.val == "=" && action == "+"){
            
            res.textContent = num1+number;
        }

    });
})