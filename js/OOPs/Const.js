let setEmpDetails=
    function(name,company)
    {
        this.name=name
        this.company=company

        this.getName=
            function()
            {
                return this.name
            }

        this.getCompany=
            function()
            {
                return this.company
            }    
    }

    let Emp1= new setEmpDetails('Harshith','Spurtree')
    console.log(Emp1.getName())
    