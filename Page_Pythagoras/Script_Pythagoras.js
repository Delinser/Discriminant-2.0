window.onload = function clear__all__after__update() {
    document.getElementById("inp_4").value = ""
    document.getElementById("inp_5").value = ""
    document.getElementById("inp_6").value = "" 
 }; 
countButton1.onclick = function sqrt() {                                            // Pull values from inputs(sqrt)
let A1 = document.getElementById('inp_4').value 
let B1 = document.getElementById('inp_5').value 
let C1 = document.getElementById('inp_6').value 

let c = Math.sqrt(((A1**2) + (B1**2)))
let a = Math.sqrt(((C1**2) - (B1**2)))
let b = Math.sqrt(((C1**2) - (A1**2)))
if((A1 =="" && B1 =="") && C1 == ""){
alert("enter numbers")
}
else{
if(C1 == ""){ 
    
    alert("C="+c)
}
if(A1 == ""){
    
    alert("A="+a) 
}
if(B1 == ""){
    
    alert("B="+b)
}
}
};                              
clearButton1.onclick = function clearf1(){                                         //Clear values in inputs(sqrt)
document.getElementById("inp_4").value = ""
document.getElementById("inp_5").value = ""
document.getElementById("inp_6").value = ""
};// End of code