window.onload = function clear__all__after__update() {
    document.getElementById("inp_1").value = ""
    document.getElementById("inp_2").value = ""
    document.getElementById("inp_3").value = ""  
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
    if((A == "" || B == "")|| C == ""){                                                                    //output 
        alert("Enter all numbers")

    }
    else{                                                                           
        if(D>0){
        alert("D=" + B_sqrt + "-4*" + A +"*" + C + "=" + D + '\n' + "X1=" + "(" + -B + "+" + Dsq + ")" + "/" + "(" + A + "*2" + ")" + "=" + X1 + '\n' + "X2=" + "(" + -B + "-" + Dsq + ")/("+  A + "*2"+ ")"+ "=" + X2  )
        }
        else{
            if(X1 == X2){
                alert("D=" +  B_sqrt + "-4*" + A + "*" + C + "=" + D + '\n' + "X12=" + "(" + -B + "+" + Dsq + ")" + "/" + "(" + A + "*2)"+ "=" + X1  )
            }
            else {
                alert("D=" + B_sqrt + "-4*" + A +"*" + C + "=" + D  +  '\n' +  "Nan")
            }
        }
    }
};

clearButton.onclick = function clearf(){                                        //Clear values in inputs(dis)
    document.getElementById("inp_1").value = ""
    document.getElementById("inp_2").value = ""
    document.getElementById("inp_3").value = ""
};