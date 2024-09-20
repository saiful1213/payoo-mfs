document.getElementById('addMoneyBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const pinNumber = document.getElementById('add-pin-number').value;
    if (pinNumber === '1234') {
        const amount = Number(document.getElementById('addAmount').value);
        const balanceStr = document.getElementById('balance');
        let balance = Number(balanceStr.innerText);
        balance += amount;
        balanceStr.innerText = balance;
    }
    else {
        alert('failed to add money')
    }
})