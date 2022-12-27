var finalNumDisp='';
var finalNumUse='';
var finalResult='';
var finalNumDisp1=[];
var finalNumUse1=[];
const numValue=(number)=>{
    let num=document.getElementById(number).value;
    let val=document.getElementById(number).innerText;
    console.log("num.value",num)
    console.log("finalNumDisp.length",finalNumDisp.length)
    if(finalNumDisp.length>=20)
    {
        if(num=='DEL')
        {
            console.log("inside DEL")
            finalNumDisp1=finalNumDisp.split('')
            finalNumUse1=finalNumUse.split('')
            finalNumDisp1.pop()
            finalNumUse1.pop()
            console.log("finalNumDisp1.length",finalNumDisp1.length)
            finalNumDisp=finalNumDisp1.toString().replaceAll(',','')
            finalNumUse=finalNumUse1.toString().replaceAll(',','')
            console.log("finalNumDisp[finalNumDisp.length-1]",finalNumDisp[finalNumDisp.length-1])
            if((finalNumDisp[finalNumDisp.length-1]!='⨯')&&( finalNumDisp[finalNumDisp.length-1]!='-')&& (finalNumDisp[finalNumDisp.length-1]!='+')&& (finalNumDisp[finalNumDisp.length-1]!='%')&& (finalNumDisp[finalNumDisp.length-1]!='÷'))
                finalResult=eval(finalNumUse)
            else
                finalResult=''
            console.log(finalNumDisp,finalNumUse,finalResult)
            if(finalNumDisp1.length=='0'){
                finalNumDisp=''
                finalNumUse=''
                finalResult=''
                }
            document.getElementById('value').innerText=finalNumDisp
            document.getElementById('result').innerText=finalResult
            document.getElementById('display').innerText=''
        }
        else if(num=='AC'){
            finalNumDisp=""
            finalNumUse=""
            finalResult=""
            document.getElementById('value').innerText=finalNumDisp
            document.getElementById('result').innerText=finalResult
            document.getElementById('display').innerText=''
        }
        else if(num=='='){
            console.log("inside equal")
            finalNumDisp=finalResult
            finalNumUse=finalResult
            document.getElementById('display').innerText=finalResult
            document.getElementById('value').innerText=''
            document.getElementById('result').innerText=''
        }
        else 
            alert('Maximum limit Exceded')
    }
    else
    {
        if(num=='='){
            console.log("inside equal")
            finalNumDisp=finalResult
            finalNumUse=finalResult
            document.getElementById('display').innerText=finalResult
            document.getElementById('value').innerText=''
            document.getElementById('result').innerText=''
        }
        else if(num=='DEL'){
            console.log("inside DEL")
            finalNumDisp1=finalNumDisp.split('')
            finalNumUse1=finalNumUse.split('')
            finalNumDisp1.pop()
            finalNumUse1.pop()
            console.log("finalNumDisp1.length",finalNumDisp1.length)
            finalNumDisp=finalNumDisp1.toString().replaceAll(',','')
            finalNumUse=finalNumUse1.toString().replaceAll(',','')
            console.log("finalNumDisp[finalNumDisp.length-1]",finalNumDisp[finalNumDisp.length-1])
            if((finalNumDisp[finalNumDisp.length-1]!='⨯')&&( finalNumDisp[finalNumDisp.length-1]!='-')&& (finalNumDisp[finalNumDisp.length-1]!='+')&& (finalNumDisp[finalNumDisp.length-1]!='%')&& (finalNumDisp[finalNumDisp.length-1]!='÷'))
                finalResult=eval(finalNumUse)
            else
                finalResult=''
            console.log(finalNumDisp,finalNumUse,finalResult)
            if(finalNumDisp1.length=='0'){
                finalNumDisp=''
                finalNumUse=''
                finalResult=''
                }
            document.getElementById('value').innerText=finalNumDisp
            document.getElementById('result').innerText=finalResult
            document.getElementById('display').innerText=''
        }
        else if(num=='AC'){
            finalNumDisp=""
            finalNumUse=""
            finalResult=""
            document.getElementById('value').innerText=finalNumDisp
            document.getElementById('result').innerText=finalResult
            document.getElementById('display').innerText=''
        }
        else{
            console.log("inside else")
            finalNumDisp=finalNumDisp+val
            finalNumUse=finalNumUse+num
            if(num!='*'&& num!='-'&& num!='+'&& num!='%'&& num!='/'){
            finalResult=eval(finalNumUse)
            console.log(finalNumDisp,finalNumUse,finalResult)
            document.getElementById('result').innerText=finalResult
            }
            document.getElementById('value').innerText=finalNumDisp
            document.getElementById('display').innerText=''
        }
    }
    
}

const dark=()=>{
  document.body.classList.toggle('dark_body');
   document.getElementById('main_container').classList.toggle('dark_main');
  document.getElementById('buttons_container').classList.toggle('dark_buttons_container');
  document.getElementById('dark_button').classList.toggle('toggle_dark_button');
//   document.getElementsByTagName('button').classList.toggle('darkmode_button')
//   document.getElementsByClassName('heading').innerText='Dark Mode'
     
}
