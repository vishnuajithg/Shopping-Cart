// const { isNaN } = require("lodash")

const cartMap = new Map()
const price = {
    "apple": 150,
    "banana": 50,
    "rice": 60,
    "wheat flour": 40,
    "milk": 55,
    "eggs": 60,
    "chicken": 200,
    "paneer": 350,
    "sugar": 45,
    "salt": 20,
    "butter": 450,
    "oil": 180,
    "tea": 250,
    "coffee": 500,
    "tomato": 30,
    "potato": 25,
    "onion": 30,
    "garlic": 150,
    "ginger": 120,
    "spinach": 40
};


function addItems(item,quantity){
    cartMap.set(item,quantity)
    toPrint(cartMap,price)

}
function toPrintInvoice(){
    print()
}

function toPrint(cartMap,price){
    grandTotal = 0
   table = document.getElementById('table-body')
   table.innerHTML = ''
   cartMap.forEach((value,key)=>{
    let row = document.createElement('tr')
    let cell = document.createElement('td')
    cell.textContent = key
    cell2 = document.createElement('td')
    cell2.textContent = value
    // if(value!= null && !isNaN(newQuantity) && val>0){}
    cell3 = document.createElement('td')
    cell3.textContent = price[key]
    cell4 = document.createElement('td')
    cell4.textContent = (value * price[key]).toFixed(2)
    deleteButton = document.createElement('td')
    deleteButton = document.createElement('button')
    deleteButton.textContent = "Remove"
    editButton = document.createElement('td')
    editButton = document.createElement('button')
    editButton.textContent = 'Edit'
  
    // gt = document.getElementById('gt')
    grandTotal += value*price[key]
    // gt.textContent = grandTotal
    // row.document.createElement('</tr>')
    row.appendChild(cell)
    row.appendChild(cell2)
    row.appendChild(cell3)
    row.appendChild(cell4)
    row.appendChild(deleteButton)
    row.appendChild(editButton)
    table.appendChild(row);
    // table.appendChild(document.createElement('tr'))
    deleteButton.onclick = function(){
        table.removeChild(row)
        cartMap.delete(key)
        toPrint(cartMap,price)
    }
    editButton.onclick = function(){
        newQuantity = Number(prompt("Enter new Quantity",value))
        if (newQuantity!= null && !isNaN(newQuantity) && newQuantity>0 ){
            cartMap.set(key,newQuantity)
            toPrint(cartMap,price)
        }
    }
    
   })
   document.getElementById('grandTotal').innerHTML = `${grandTotal.toFixed(2)}`
}

document.getElementById('input-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    item = document.getElementById('select-item').value
    quantity = document.getElementById('select-quantity').value
    if (quantity!= null && !isNaN(quantity) && quantity>0 ){
    console.log(item,quantity)
    addItems(item,quantity)
    }
    else{
        alert('Quantity should not be empty!')
    }
})

