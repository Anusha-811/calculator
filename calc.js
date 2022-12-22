var finalNumDisp='';
var finalNumUse='';
var finalResult='';
const numValue=(number)=>{
    
    let num=document.getElementById(number).innerText;
    
    console.log(num)
    if(num=='AC'){
        finalNumDisp='' 
        finalNumUse=''
        finalResult=''
        document.getElementById('result').innerText=finalResult
        document.getElementById('value').innerText=finalNumDisp
    }
    else
    {
        finalNumDisp=finalNumDisp+num
        finalNumUse=finalNumUse+num
        console.log("Display Num",finalNumDisp)
        console.log("Result Num",finalNumUse)
        if(finalNumUse.includes('+')||finalNumUse.includes('÷')||finalNumUse.includes('⨯')||finalNumUse.includes('−'))
        {   
            if(finalResult!=''&& (num=='+'||num=='−'||num=='÷'||num=='⨯')){
                finalNumUse=finalResult+num
                console.log("Final Result Num",finalNumUse)
            }  
            if(finalNumUse.includes('+')&& !(num=='+'||num=='−'||num=='÷'||num=='⨯'))
            {
                splitNum= finalNumUse.split('+')
                console.log(splitNum[0],splitNum[1])
                finalResult=Number(splitNum[0])+Number(splitNum[1])
            }
            else if(finalNumUse.includes('÷')&& !(num=='+'||num=='−'||num=='÷'||num=='⨯'))
            {
                splitNum= finalNumUse.split('÷')
                console.log(splitNum[0],splitNum[1])
                finalResult=Number(splitNum[0])/Number(splitNum[1])
            }
            else if(finalNumUse.includes('⨯')&& !(num=='+'||num=='−'||num=='÷'||num=='⨯'))
            {
                splitNum= finalNumUse.split('⨯')
                console.log(splitNum[0],splitNum[1])
                console.log("Split length",splitNum.length)
                finalResult=Number(splitNum[0])*Number(splitNum[1])
            }
            else if(finalNumUse.includes('−')&& !(num=='+'||num=='−'||num=='÷'||num=='⨯'))
            {
                splitNum= finalNumUse.split('−')
                console.log(splitNum[0],splitNum[1])
                console.log("Split length",splitNum.length)
                finalResult=Number(splitNum[0])-Number(splitNum[1])
            }
            
            console.log("finalResult",finalResult)
            document.getElementById('result').innerText=finalResult

           
        }
        document.getElementById('value').innerText=finalNumDisp
        console.log("1",finalResult)
            console.log("2",finalNumDisp)
        if(num=='='){
            // finalNumDisp=finalResult
            console.log(finalResult)
            console.log(finalNumDisp)
            // finalResult=''
            document.getElementById('value').innerText=finalResult
        }
       
    }

}

const dark = ()=>{
     document.body.style.backgroundColor='black'
     document.getElementById('buttons_container').style.backgroundColor='bisque'
     document.getElementById('main_container').style.backgroundColor= 'gray'
     document.getElementById('display_container').style.backgroundColor= 'black'
    //  document.getElementsByTagName('h1').style.color='white'
}
const light = ()=>{
    document.body.style.backgroundColor='white'
     document.getElementById('buttons_container').style.backgroundColor='black'
     document.getElementById('main_container').style.backgroundColor= 'black'
     document.getElementById('display_container').style.backgroundColor= 'gray'
}

