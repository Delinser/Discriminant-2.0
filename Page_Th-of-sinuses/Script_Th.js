window.onload = function clear__all__after__update() {
    document.getElementById("inp_7").value = ""
    document.getElementById("inp_8").value = ""
    document.getElementById("inp_9").value = ""
    document.getElementById("inp_10").value = ""
    document.getElementById("inp_11").value = ""
    document.getElementById("inp_12").value = "" 
 }; 

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