function createIncome(value,description){
    return{ 
            description:description,
            value:value
            }
}

function MakeBudget(){
    return {
        listIncomes:[],
        listExpenses:[],
        totalIncomes:0,
        totalExpenses:0,
        total:0,
        addIncome:addIncome,
        addExpense:addExpense
    }
}

function addIncome(value,description){
    this.totalIncomes+=value
    var obj=createIncome(value,description)
    this.listIncomes.push(obj)
    this.total=this.total+value
}
function addExpense(value,description){
    this.totalExpenses+=value
    var obj=createIncome(value,description)
    this.listExpenses.push(obj)
    this.total=this.total-value
}
var val=document.getElementById("amount")
var des=document.getElementById("description")
var budg= MakeBudget()
function display1(){
        $("#income-list").append(`<div>
        <p>${budg.listIncomes[budg.listIncomes.length-1].description}</p>
        <p>${budg.listIncomes[budg.listIncomes.length-1].value}</p>
        `)
        $("#amount-available").empty()
        $("#amount-available").append(`<h2>${budg.total}</h2>`)
        $("#amount-earned").empty()
        $("#amount-earned").append(`<h3>${budg.totalIncomes}</h3>`)
} 
function display2(){
        $("#expenses-list").append(`<div>
        <p>${budg.listExpenses[budg.listExpenses.length-1].description}</p>
        <p>${budg.listExpenses[budg.listExpenses.length-1].value}</p>
        </div>`)
        $("#amount-available").empty()
        $("#amount-available").append(`<h2>${budg.total}</h2>`)
        $("#amount-spent").empty()
        $("#amount-spent").append(`<h3>${budg.totalExpenses}</h3>`)
    
} 
function clearData(){
    val.value=""
    des.value=""
}


$("#add-income").on("click",function(){
    console.log(val.value)
    var num=parseInt(val.value)
    budg.addIncome(num,des.value)
    clearData()
    display1()
})
$("#add-expense").on("click",function(){
    var num=parseInt(val.value)
    budg.addExpense(num,des.value)
    clearData()
    display2()
})
$("#delete").on("click",function(){
    budg.listExpenses=[]
    budg.listIncomes=[]
    budg.total=0
    budg.totalExpenses=0
    budg.totalIncomes=0
    $("#expenses-list").empty()
    $("#income-list").empty()
    $("#income-list").append(`
    <h2>Income</h2>
        `)
    $("#expenses-list").append(`
    <h2>Expenses</h2>
    `)
    $("#amount-available").empty()
    $("#amount-earned").empty()
    $("#amount-spent").empty()
})