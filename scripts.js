            
            countButton.onclick = function dis() {
            let A = document.getElementById('inp_1').value 
            let B = document.getElementById('inp_2').value 
            let C = document.getElementById('inp_3').value 

            let D = B**2 - 4*A*C
            let X1 = (-B + Math.sqrt(D))/ (2*A)
            let X2 = (-B - Math.sqrt(D))/ (2*A)
            let B2 =  B**2
            let Dsq = Math.sqrt(D)
           
                if(A == ""){
                    alert("NoN")

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
            
               
        
       

            countButton1.onclick = function dis() {
                let A1 = document.getElementById('inp_4').value 
                let B1 = document.getElementById('inp_5').value 
                let C1 = document.getElementById('inp_6').value 
            }
            
            let c = Math.sqrt((a**2 + b**2))
            let a = Math.sqrt((c**2 - b**2))
            let b = Math.sqrt((c**2 - a**2))

            if(C1 == ""){
                alert(c)
            }
            if(A1 == ""){
                alert(a)
            }
            if(B1 == ""){
                alert(b)
            }



            clearButton1.onclick = function clearf(){
                            document.getElementById("inp_4").value = ""
                            document.getElementById("inp_5").value = ""
                            document.getElementById("inp_6").value = ""
                        }



    
    