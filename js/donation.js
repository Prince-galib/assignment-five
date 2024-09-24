document.getElementById('btn-donate-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        // console.log('add money button clicked');

        const donateMoney = getInputFieldValueById('input-donate-money');
        // console.log('donet money sucessful', donateMoney);


        if(donateMoney){
            const balance = getTextFieldValueById('donate-account-balance');
            const newBalance = balance + donateMoney;
            document.getElementById('donate-account-balance').innerText = newBalance;
            alert('Donate Sucessful')
        }
        else{
            alert('Not A Number! Try again.')

        }
})