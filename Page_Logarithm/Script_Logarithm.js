window.onload = function clear__all__after__update() {
    document.getElementById("inp_13").value = ""
    document.getElementById("inp_14").value = ""    
 }; 
 
log__countButton.onclick = function logar() { 
                                         
let N1 = document.getElementById('inp_13').value 
let Base = document.getElementById('inp_14').value 
if (N1 == 'e') {
    N1 = Math.E;
} else {
    N1 = parseFloat(N1);
}
if (isNaN(Base) || isNaN(N1)) {
    document.getElementById('log__span').innerHTML = 'Ошибка при вводе данных!';
    return;
}
if (Base <= 0) {
    document.getElementById('log__span').innerHTML = 'Число должно быть положительным!';
    return;
}
if (N1 <= 0 || N1 == 1) {
    document.getElementById('log__span').innerHTML = 'Основание логарифма должно быть больше нуля и не должно равняться единице!';
    return;
}
let res = (Math.log(Base) / Math.log(N1));
document.getElementById('log__span').innerHTML = res;
        };
log__clearButton.onclick = function clear__log(){                                         //Clear values in inputs(sqrt)
document.getElementById("inp_13").value = ""
document.getElementById("inp_14").value = ""
document.getElementById('log__span').innerHTML = ""
 
};// End of code      