  let here = prompt("Are you here to see Bri?");
        if (here === "yes") {
            alert("Welcome Darlingπ");
        }
        if (here === "no") {
            alert("Aw, I hope you change your mind π")
        }

        function purchaseHere() {
            let name = prompt("What is your name ?");
            let email = prompt("What is your email?");
            alert("Thank you " + name + ", we will be in contact shortly, meanwhile enjoy ππ½π")
        }
        let button = document.querySelector(".buyButton");
        button.addEventListener("click", purchaseHere);