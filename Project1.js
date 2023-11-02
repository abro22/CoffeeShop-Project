

function fullName () {
    let nameOption = document.getElementById ("nameBox").value
    let email = document.getElementById ("emailBox").value
    let drinkType = drinkOptions ()
    let addFlavor = flavorOptions () 
    let milkType = milkOption ()

    alert (`Hello ${nameOption}, your ${drinkType} with ${addFlavor} and ${milkType} will be ready soon. We've sent a confirmation to ${email}.`) 

    
    }

//--------------------

function drinkOptions () {
    drink = document.getElementsByClassName ("drinkInput")
    for (i = 0; i <drink.length; i++) {
        if ( drink[i].checked === true) {
            let drinkSelect = drink[i].value
            return drinkSelect
        }
    }

}

//-----------------------

function flavorOptions () {
let flavorString = "" 
let flavor = document.getElementsByClassName ("flavorsInput")
    for (i = 0; i < flavor.length; i++){
        if (flavor[i].checked === true) { 
        flavorString = flavorString + " " + flavor[i].value 
             }
        }  return flavorString
    
    }

//-----------------------

 function milkOption () {
    let milk = document.getElementsByClassName ("milkInput")
    for (i = 0; i < milk.length; i++) {
        if (milk[i].checked === true) {
            let milkSelect = milk[i].value
            return milkSelect
        }
    }
 }



            // let comment = document.getElementById ("longmsg").value