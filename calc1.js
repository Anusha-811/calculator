var finalNumDisp='';
var finalNumUse=0;
var finalResult='';
const numValue=(number)=>{
    
    let num=document.getElementById(number).;
    finalNumDisp=finalNumDisp+num
    
    // document.getElementById('result').innerText=finalNumDisp
    document.getElementById('value').innerText=finalNumDisp
    console.log(finalNumDisp)
    if(num=='='){
        finalNumUse=eval(finalNumDisp)
        document.getElementById('value').innerText=finalNumUse

    }
}
