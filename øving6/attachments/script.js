function calc_tax(){
                let income = document.getElementById("income").value;
                let wealth = document.getElementById("wealth").value;
                tax = (0.35*income) + (0.25*wealth);
                document.getElementById("tax").value = tax;
            }
