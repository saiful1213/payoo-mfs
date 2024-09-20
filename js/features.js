
const displayCashOut = document.getElementById('display-cash-out');
const displayAddMoney = document.getElementById('display-add-money');
const cashOutContainer = document.getElementById('cashOutContainer');
const addMoneyContainer = document.getElementById('addMoneyContainer');

displayCashOut.addEventListener('click', () => {
    cashOutContainer.classList.remove('hidden');
    addMoneyContainer.classList.add('hidden')
});

displayAddMoney.addEventListener('click', () => {
    cashOutContainer.classList.add('hidden');
    addMoneyContainer.classList.remove('hidden');
})