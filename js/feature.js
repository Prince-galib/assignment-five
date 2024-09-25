document.getElementById('show-donation-form').addEventListener('click', function(){
    console.log('clicked button')
    showSectionById('show-donation-main');
})


document.getElementById('show-history-form').addEventListener('click', function(){
    showSectionById('transaction-section');
})