function add(){
    let a=document.getElementById('num1').value
    let b=document.getElementById('num2').value
    let res=document.getElementById('para')
    let sum=parseFloat(a)+parseFloat(b)
    res.innerHTML=sum
}
function sub(){
    let a=document.getElementById('num1').value
    let b=document.getElementById('num2').value
    let res=document.getElementById('para')
    let sub=parseFloat(a)-parseFloat(b)
    res.innerHTML=sub
}
function mul(){
    let a=document.getElementById('num1').value
    let b=document.getElementById('num2').value
    let res=document.getElementById('para')
    let mul=parseFloat(a)*parseFloat(b)
    if(Math.trunc(mul)!=mul){
        res.innerHTML=mul.toFixed(2)
    }
    else{
        res.innerHTML=mul
    }
    // res.innerHTML=mul
}
function div(){
    let a=document.getElementById('num1').value
    let b=document.getElementById('num2').value
    let res=document.getElementById('para')
    let div=parseFloat(a)/parseFloat(b)
    if(Math.trunc(div)!=div){
        res.innerHTML=div.toFixed(2)
    }
    else{
        res.innerHTML=div
    }
    // res.innerHTML=div.toFixed(2)
}
function power(){
    let a=document.getElementById('num1').value
    let b=document.getElementById('num2').value
    let res=document.getElementById('para')
    let pow=parseFloat(a)**parseFloat(b)
    if(Math.trunc(pow)!=pow){
        res.innerHTML=pow.toFixed(2)
    }
    else{
        res.innerHTML=pow
    }
    // res.innerHTML=pow.toFixed(2)
}
function percent(){
    let a=document.getElementById('num1').value
    let b=document.getElementById('num2').value
    let res=document.getElementById('para')
    let per=(parseFloat(a)/parseFloat(b))*100
    if(Math.trunc(per)!=per){
        res.innerHTML=per.toFixed(2)+"%"
    }
    else{
        res.innerHTML=per +"%"
    }
    // res.innerHTML=per.toFixed(2) +"%"
}
