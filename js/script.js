const inputConfPass = document.querySelector(".conf_pass");
const inputNewPassword = document.querySelector(".newPass");


function checkPass(elm) {
    const newPass = elm.value;
    const color = getComputedStyle(elm.parentElement);
        if ((/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/).test(newPass) === true){
             // check mark
            if (elm.classList.contains("newPass")) {
                elm.parentElement.setAttribute("data-check", String.fromCharCode(0x2714))
                elm.classList.add("accept");
                document.documentElement.style.setProperty('--col', 'green');
                elm.parentElement.nextElementSibling.textContent = "";
                document.documentElement.style.setProperty('--color-new', 'green');
            } 
            else if (newPass === document.querySelector(".newPass").value) {
                elm.parentElement.setAttribute("data-check", String.fromCharCode(0x2714));
                elm.classList.add("accept");
                document.documentElement.style.setProperty('--col', 'green');
                elm.parentElement.nextElementSibling.textContent = "";
                document.documentElement.style.setProperty('--color-conf', 'green');
            }
                
        }   
        else {
            if (elm.classList.contains("newPass")){
                elm.parentElement.nextElementSibling.textContent = "Use this format x&y2*bzK!";
                document.documentElement.style.setProperty('--color-new', 'red');
            }
            else {
                elm.parentElement.nextElementSibling.textContent = "Password is incorrect!";
                document.documentElement.style.setProperty('--color-conf', 'red');
            }
               
            elm.parentElement.setAttribute("data-check", String.fromCharCode(0x2717)); //cross 
            elm.classList.remove("accept");
            elm.classList.add("reject");
            document.documentElement.style.setProperty('--col', 'red');
        }
           
    if (newPass.length <= 1) 
        elm.textContent = "";
}


function addEvent(elm, event, func) {
    elm.addEventListener(event, () => {
        func(elm);
    });
}

addEvent(inputNewPassword, "keyup", checkPass);
addEvent(inputConfPass, "keyup", checkPass)