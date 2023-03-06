let EmpDetails=function(name,company)
{
    this.name=name
    this.company=company
}

EmpDetails.prototype.getName=function()
{
    return this.name
}

EmpDetails.prototype.getCompany=function()
{
    return this.company
}


let myEmp1=new EmpDetails('Harshith','Spurtree')
console.log(myEmp1.getName())

