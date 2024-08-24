 let celsiusinput = document.querySelector('#celcius >input')
 let fahrenheitinput = document.querySelector('#Farhenheit >input')
 let kelvininput = document.querySelector('#Kelvin >input')

 let btn=document.querySelector('.button button')

 function roundNumber(number){
  return Math.round(number*100)/100
}


celsiusinput.addEventListener('input', function(){
  let cTemp = parseFloat(celsiusinput.value)
  let fTemp = (cTemp*(9/5)) + 32
  let kTemp = cTemp + 273.15

  fahrenheitinput.value = roundNumber(fTemp)
  kelvininput.value = roundNumber(kTemp)
})

fahrenheitinput.addEventListener('input', function(){
  let fTemp = parseFloat(fahrenheitinput.value)
  let cTemp = (fTemp - 32) * (5/9)
  let kTemp = (fTemp -32) * (5/9) + 273.15
  celsiusinput.value = roundNumber(cTemp)
  kelvininput.value = roundNumber(kTemp)
})
kelvininput.addEventListener('input', function(){
  let kTemp = parseFloat(kelvininput.value)
  let cTemp = kTemp - 273.15
  let fTemp = (kTemp - 273.15) * (9/5) + 32

  celsiusinput.value = roundNumber(cTemp)
  fahrenheitinput.value = roundNumber(fTemp)
})
btn.addEventListener('click', ()=>{
  celsiusinput.value = ""
  fahrenheitinput.value = ""
  kelvininput.value = ""
})