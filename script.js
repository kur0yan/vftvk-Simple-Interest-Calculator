function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value
    var years = document.getElementById("years").value
    var interest = (principal * years * rate )/100
    var returnval = interest
    var d = new Date()
    var currentYear = d.getFullYear()
    futureYear = parseInt(currentYear) + parseInt(years)

    if (principal<=0){
        alert("Enter a positive number")
        document.getElementById("principal").focus()
        document.getElementById("result").innerHTML="";
        return    
    }

    var result = "If you deposit <mark>" + principal + "</mark>,<br\>" + "at an interest rate of <mark>" + rate + "</mark>%.<br/>" + "You will receive an amount of <mark>" + returnval + "</mark>,<br/>" + "in the year <mark>"+ futureYear +"</mark>"
    document.getElementById("result").innerHTML= result

}

function rangeValue()
{
    document.getElementById("rangeval").textContent = document.getElementById("rate").value + '%'
}
        