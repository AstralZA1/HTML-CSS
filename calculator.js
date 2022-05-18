const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
buttons.forEach((item)=>{
    item.onclick = () =>{
        if(item.id=='backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length-1);
        }else if(display.innerText!='' && item.id=='equal'){
            display.innerText = eval(display.innerText);
        }else if(display.innerText=='' && item.id=='equal'){
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText=''), 2000);
        }else if(item.id=='clear'){
            display.innerText = '';
        }else{
            display.innerText += item.id;
        }
    }
})
const theme_toggle_button = document.querySelector('.theme_toggler');
const calculator = document.querySelector('.calculator');
const icon_toggle = document.querySelector('.toggle_icon');
let isDark = true;
theme_toggle_button.onclick = () =>{
    calculator.classList.toggle('dark');
    theme_toggle_button.classList.toggle('active');
    isDark = !isDark;
}