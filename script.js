let res = document.querySelector("#res")
let clickables = document.querySelectorAll('.clickable');
var num1 = 0;
var num2 = 0;
var num3 = 0;
function sum(p1,p2) {
    return p1+p2;
}
clickables.forEach((elem) => {
    elem.addEventListener("click", function clickButton(button) {
        if (this.dataset.val == "ac"){ 
            res.textContent = 0;
        }
         else {
             res.textContent = this.dataset.val;
         }
        if (this.dataset.val>=0){
            num2=num1;
            num1=this.dataset.val;
        }
        console.log(num1);
        console.log(num2);
        num1=+num1;
        num2=+num2;
        if (this.dataset.val == "="){ 
            num3 = num1 + num2;
            console.log(num1+num2);
            res.textContent = num3;
        }
        
    });
})