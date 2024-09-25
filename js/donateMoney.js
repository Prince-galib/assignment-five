document.getElementById('btn-donate-money').addEventListener('click', function(event){
    event.preventDefault();

    const donetMoneyNew = getInputFieldValueById('input-donate-money');

    if(isNaN(donetMoneyNew)){
        return;
    }

    if(donetMoneyNew){
        const balance = getTextFieldValueById('main-balance');
        if(donetMoneyNew > balance){
            alert('You do not have enough money!');
            return;
        }
        const newBalance = balance - donetMoneyNew;
        document.getElementById('main-balance').innerText = newBalance;

                // add to transaction history
                const div = document.createElement('div');
                div.classList.add('bg-cyan-400');
                div.innerHTML = `
                    <h4 class="text-2xl font-bold text-center"> Donate Successfilly</h4>
                    <p class=" font-bold text-center">${donetMoneyNew}Taka is Donated for famine-2024 at Feni, Bangladesh</p>
                `
    
                document.getElementById('transaction-container').appendChild(div);
    }
            else{
                alert('Cash in First')
            }

})


document.getElementById('btn-donate-money2').addEventListener('click', function(event){
    event.preventDefault();

    const donetMoneyNew = getInputFieldValueById('input-donate-money2');

    if(isNaN(donetMoneyNew)){
        return;
    }

    if(donetMoneyNew){
        const balance = getTextFieldValueById('main-balance');
        if(donetMoneyNew > balance){
            alert('You do not have enough money!');
            return;
        }
        const newBalance = balance - donetMoneyNew;
        document.getElementById('main-balance').innerText = newBalance;

                // add to transaction history
                const div = document.createElement('div');
                div.classList.add('bg-cyan-400');
                div.innerHTML = `
                    <h4 class="text-2xl font-bold text-center">Donate Successfully</h4>
                    <p class=" font-bold text-center">${donetMoneyNew}Taka is Donated for Flood Relief in Feni,Bangladesh</p>
                `
    
                document.getElementById('transaction-container').appendChild(div);
    }
            else{
                alert('Cash in First')
            }

})




document.getElementById('btn-donate-money3').addEventListener('click', function(event){
    event.preventDefault();

    const donetMoneyNew = getInputFieldValueById('input-donate-money3');

    if(isNaN(donetMoneyNew)){
        return;
    }

    if(donetMoneyNew){
        const balance = getTextFieldValueById('main-balance');
        if(donetMoneyNew > balance){
            alert('You do not have enough money!');
            return;
        }
        const newBalance = balance - donetMoneyNew;
        document.getElementById('main-balance').innerText = newBalance;

                // add to transaction history
                const div = document.createElement('div');
                div.classList.add('bg-cyan-400');
                div.innerHTML = `
                    <h4 class="text-2xl font-bold text-center">Donate Successfully</h4>
                    <p class=" font-bold text-center">${donetMoneyNew}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
                `
    
                document.getElementById('transaction-container').appendChild(div);
    }
            else{
                alert('Cash in First')
            }

})