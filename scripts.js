            window.onload = function clear__all__after__update() {
                    document.getElementById("inp_1").value = ""
                    document.getElementById("inp_2").value = ""
                    document.getElementById("inp_3").value = ""
                    document.getElementById("inp_4").value = ""
                    document.getElementById("inp_5").value = ""
                    document.getElementById("inp_6").value = ""
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
           
                if(A == ""){                                                                    //output 
                    alert("NoN")

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
                
            
            
               
            countButton1.onclick = function sqrt() {                                            // Pull values from inputs(sqrt)
                let A1 = document.getElementById('inp_4').value 
                let B1 = document.getElementById('inp_5').value 
                let C1 = document.getElementById('inp_6').value 
            
            let c = Math.sqrt(((A1**2) + (B1**2)))
            let a = Math.sqrt(((C1**2) - (B1**2)))
            let b = Math.sqrt(((C1**2) - (A1**2)))
           
            if(C1 == ""){ 
                
                alert("C="+c)
            }
            if(A1 == ""){
                
                alert("A="+a) 
            }
            if(B1 == ""){
                
                alert("B="+b)
            }


               };                              
            clearButton1.onclick = function clearf1(){                                         //Clear values in inputs(sqrt)
                document.getElementById("inp_4").value = ""
                document.getElementById("inp_5").value = ""
                document.getElementById("inp_6").value = ""
            };// End of code
                

    
      