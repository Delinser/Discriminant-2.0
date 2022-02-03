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
                if((A == "" && B == "")&& C==""){
                    alert("enter numbers")
                }
                else{
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

            countButton2.onclick = function sint(){
            let A2 = document.getElementById('inp_7').value 
            let B2 = document.getElementById('inp_8').value 
            let C2 = document.getElementById('inp_9').value 
            let D2 = document.getElementById('inp_10').value 
            let E2 = document.getElementById('inp_11').value 
            let F2 = document.getElementById('inp_12').value 
            let i = 0
            if(((A2 == "" && B2 == "") && (C2 == "")) || ((D2 == "" && E2 == "") && (F2 == "")) ){
                alert("Enter at least one number ")
            }
            if(((A2 == "" || B2== "")|| C2 == "") && (D2!= "" || E2 != "") || F2 != ""){
                alert("ok")

            }
            else{
                alert("Enter the required number")
            }   
            
                if(A2 != ""){
                    i = i + 1
                }
                if(B2 != ""){
                    i = i + 1
                }
                if(C2 != ""){
                    i = i + 1
                }
                if(D2 != ""){
                    i = i + 1
                }
                if(E2 != ""){
                    i = i + 1
                }
                if(F2 != ""){
                    i = i + 1
                }
                if(i<3){
                    alert("Enter the required number ")                                                            
                }
                else{
                    alert("i="+ i)                                                        // вот сюда
                }

            };                              
            clearButton2.onclick = function clearf2(){                                         //Clear values in inputs(sint)
                document.getElementById("inp_7").value = ""
                document.getElementById("inp_8").value = ""
                document.getElementById("inp_9").value = ""
                document.getElementById("inp_10").value = ""
                document.getElementById("inp_11").value = ""
                document.getElementById("inp_12").value = ""
            };// End of code