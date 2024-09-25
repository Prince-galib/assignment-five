document.getElementById('btn-donate-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        const donateMoney = getInputFieldValueById('input-donate-money');

        if(donateMoney){
            
            const balance = getTextFieldValueById('donate-account-balance');
            const newBalance = balance + donateMoney;
            document.getElementById('donate-account-balance').innerText = newBalance;
            alert('Donate Successfully')
        }
        else{
            alert('Not A Number! Try again.')

        }
})


document.getElementById('btn-donate-money2')
    .addEventListener('click', function(event){
        event.preventDefault();

        const donateMoney = getInputFieldValueById('input-donate-money2');


        if(donateMoney){
            const balance = getTextFieldValueById('donate-account-balance2');
            const newBalance = balance + donateMoney;
            document.getElementById('donate-account-balance2').innerText = newBalance;
            alert('Donate Successfully')
        }
        else{
            alert('Not A Number! Try again.')

        }
})


document.getElementById('btn-donate-money3')
    .addEventListener('click', function(event){
        event.preventDefault();

        const donateMoney = getInputFieldValueById('input-donate-money3');


        if(donateMoney){
            const balance = getTextFieldValueById('donate-account-balance3');
            const newBalance = balance + donateMoney;
            document.getElementById('donate-account-balance3').innerText = newBalance;
            alert('Donate Successfully')
        }
        else{
            alert('Not A Number! Try again.')

        }
})
