const btnEl=document.getElementById('btn')
const billInput=document.getElementById('bill')
const tipInput=document.getElementById('tip')
const totalSpan=document.getElementById("totalSpan")


function calculateTotal(){
  const billValue=billInput.value;
const tipValue=tipInput.value;
console.log(Boolean(billValue))
const totalValue=billValue*(1+tipValue/100)
  const result=currencyFormeter(totalValue)
  totalSpan.innerText=result;

}

function currencyFormeter(amount){
  return amount?.toLocaleString('en-us',{
    style:"currency",
    currency:"USD"
  })
}

btnEl.addEventListener('click',function(){
  calculateTotal()
  billInput.value=""
  tipInput.value=""
})