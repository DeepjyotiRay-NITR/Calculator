let input = document.querySelector("input[type = 'text'] ");
let buttons = document.querySelectorAll("input[type = 'button'] ");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.value == "AC") {
            string = "";
        }

        else if (e.target.value == "DE") {
            string = string.slice(0, -1);
        }

        else if(e.target.value == "=") {
            string = eval(string);
        }

        else {
            string += e.target.value;
        }
        
        input.value = string;
    })
})