window.onload = function clear__all__after__update() {
    document.getElementById("inp_1").value = ""
    document.getElementById("inp_2").value = ""
    document.getElementById("inp_3").value = ""
    document.getElementById("output").innerHTML = '';  
 }; 

countButton.onclick = function dis()   {                                                 // Pull values from inputs(dis)

let A = document.getElementById('inp_1').value 
let B = document.getElementById('inp_2').value 
let C = document.getElementById('inp_3').value 

let D = B**2 - 4*A*C
let X1 = (-B + Math.sqrt(D))/ (2*A)
let X2 = (-B - Math.sqrt(D))/ (2*A)
let B_sqrt =  B**2
let Dsq = Math.sqrt(D)
let im_A = A;
let im_C = C;

if (A < 0) {
    im_A = '(' + A + ')' 
    
}  
if (C < 0) {
    im_C = '(' + C + ')'
}
    if((A == "" || B == "")|| C == ""){                                                                    //output 
        document.getElementById('output').innerHTML = 'Enter all numbers';

    }
    else{                                                                           
        if(D>0){
            document.getElementById("output").innerHTML = "D=" + B_sqrt + "-4*" +im_A +"*" + im_C + "=" + D + '<br>' + "X1=" + "(" + -B + "+" + Dsq + ")" + "/" + "(" + A + "*2" + ")" + "=" + X1 + '<br>' + "X2=" + "(" + -B + "-" + Dsq + ")/("+  A + "*2"+ ")"+ "=" + X2 ;
        }
        else{
            if(X1 == X2){
                document.getElementById('output').innerHTML = "D=" +  B_sqrt + "-4*" + im_A + "*" + im_C + "=" + D + '<br>' + "X12=" + "(" + -B + "+" + Dsq + ")" + "/" + "(" + A + "*2)"+ "=" + X1 ;
            }
            else {
                document.getElementById('output').innerHTML = "D=" + B_sqrt + "-4*" + im_A +"*" + im_C + "=" + D  +  '<br>' +  "Nan";
            }
        }
    }
};

clearButton.onclick = function clearf(){                                        //Clear values in inputs(dis)
    document.getElementById("inp_1").value = ""
    document.getElementById("inp_2").value = ""
    document.getElementById("inp_3").value = ""
    document.getElementById("output").innerHTML = '';
};