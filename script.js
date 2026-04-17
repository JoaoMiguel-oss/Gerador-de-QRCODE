const input = document.querySelector('input');
const button = document.querySelector('button');
const qrContainer = document.getElementById('qrcode');

button.addEventListener('click', generateQRCode);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') generateQRCode();
});

function generateQRCode() {
    const text = input.value.trim();
    
    if (!text) {
        alert('Por favor, digite um texto ou URL');
        return;
    }

    qrContainer.innerHTML = '';

    new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}