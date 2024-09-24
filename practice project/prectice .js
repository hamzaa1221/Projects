class railwayform {

    submit() {
        alert(this.name + "form is Submitted")
    }
    cancal() {
        alert(this.name+ "this form is canceled")
    }
    fill(givenname) {

        this.name = givenname
    }
}

let Hamzaform = new railwayform(Hamza)

Hamza.fill(Hamza)

let ALiform = new railwayform(ALi)

ALi.fill(ALi)

//alert can't work but why i don't know whyyyyyyyy
Hamzaform.submit()

ALiform.submit()

Hamzaform.cancal()