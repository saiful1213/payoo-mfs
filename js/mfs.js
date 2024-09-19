const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const phoneNumber = document.getElementById('phone-feild').value;
    const pinNumber = document.getElementById('pin-feild').value;
    if (phoneNumber === '01888' && pinNumber === '1234') {
        console.log('you are logged in');
        window.location.href = '/payoo-mfs/home.html';
    }
    else {
        alert('wrong input');
    }
})