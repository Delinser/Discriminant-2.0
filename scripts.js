
            elem.onclick = function dis() {
            let A = document.getElementById('inp_1').value 
            let B = document.getElementById('inp_2').value 
            let C = document.getElementById('inp_3').value 

            let D = B**2 - 4*A*C
            let X1 = (-B + Math.sqrt(D))/ (2*A)
            let X2 = (-B - Math.sqrt(D))/ (2*A)
            let B2 =  B**2
            let Dsq = Math.sqrt(D)
           
                if(A == ""){
                    alert("ИДИ на хуй")

                }
                else{
                    if(D>=0){
                    alert("D=" + B2 + "-4*" + A +"*" + C + "=" + D + '\n' + "X1=" + "(" + -B + "+" + Dsq + ")" + "/" + "(" + A + "*2" + ")" + "=" + X1 + '\n' + "X2=" + "(" + -B + "-" + Dsq + ")/("+  A + "*2"+ ")"+ "=" + X2  )
                if(D=0){
                    alert("D=" +  B2 + "-4*" + A + "*" + C + "=" + D + '\n' + "X12=" + "(" + -B + "+" + Dsq + ")" + "/" + "(" + A + "*2)"+ "=" + X1  )
                }
                }
                else {
                    alert("D=" + B2 + "-4*" + A +"*" + C + "=" + D  +  '\n' +  "Nan")
                }
                }
            
            }
            clearButton.onclick = function clearf(){
                document.getElementById("inp_1").value = ""
                document.getElementById("inp_2").value = ""
                document.getElementById("inp_3").value = ""
            }
               
          
           