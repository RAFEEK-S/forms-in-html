
function goodto(){

    

    

    let inputname= document.getElementById('inputname').value;
    console.log(inputname);

    let inputPassword4= document.getElementById('inputPassword4').value;
    console.log(inputPassword4);

    let inputAddress= document.getElementById('inputAddress').value;
    console.log(inputAddress);

    let inputAddress2= document.getElementById('inputAddress2').value;
    console.log(inputAddress2);

    let inputCity= document.getElementById('inputCity').value;
    console.log(inputCity);

    
    let inputState= document.getElementById('inputState').value;
    console.log(inputState);

    
    let inputZip= document.getElementById('inputZip').value;
    console.log(inputZip);

   


    let td1 =document.getElementById('td1');
    console.log(td1);
    td1.innerHTML=inputname;

    let td2 =document.getElementById('td2');
    console.log(td2);
    td2.innerHTML=inputPassword4;

    let td3 =document.getElementById('td3');
    console.log(td3);
    td3.innerHTML=inputAddress;

    let td4 =document.getElementById('td4');
    console.log(td4);
    td4.innerHTML=inputAddress2;

    let td5 =document.getElementById('td5');
    console.log(td5);
    td5.innerHTML=inputCity;

    let td6 =document.getElementById('td6');
    console.log(td6);
    td6.innerHTML=inputState;

    let td7 =document.getElementById('td7');
    console.log(td7);
    td7.innerHTML=inputZip;

    if(document.getElementById('male').checked){
        var td8 =document.getElementById('td8');
        td8.innerHTML=(male.value);
    } else if(document.getElementById('female').checked){
        var td8 =document.getElementById('td8');
       td8.innerHTML=(female.value);
    }
    var td9 = document.getElementById('td9');
    var checkbox=document.getElementsByName('food');

    var checkeditems=0;
    var list=[];

       for(i=0; i<checkbox.length;i++){
        if(checkbox[i].checked){
            checkeditems++;
            list.push(checkbox[i].value)
        }
       }
      
        td9.innerHTML=list; 
        
        if(list.length<2){
                alert();
        }
        

          

      

   
// 
// function myFunction() {
//     var x = document.getElementById("myText").value;
//     console.log(x)
//     let inputname= document.getElementById('inputname').value;
//     console.log(inputname);
// }
    
}
goodto();