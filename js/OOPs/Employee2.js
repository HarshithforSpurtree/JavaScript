class Employee2
{
    setEmpDetails(name,id,phoneNo)
    {
        this.name=name
        this.id=id
        this.phoneNo=phoneNo
    }

    getEmpName()
    {
        return this.name
    }

    getEmpid()
    {
        return this.id
    }

    getphoneNumber()
    {
        return this.phoneNo
    }

}

let emp1=new Employee2()
emp1.setEmpDetails('Harshith',07,9342215332)

console.log(emp1.getphoneNumber())