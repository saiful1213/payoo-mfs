
document.getElementById('cashOutBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const pinNumber = document.getElementById('pin-number').value;
    if (pinNumber === '1234') {
        const amount = Number(document.getElementById('amount').value);
        const balanceStr = document.getElementById('balance');
        let balance = Number(balanceStr.innerText);
        balance -= amount;
        balanceStr.innerText = balance;
    }
    else {
        alert('try again')
    }
})