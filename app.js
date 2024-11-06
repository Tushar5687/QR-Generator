const wrapper = document.querySelector('.wrapper');
const generateBtn = document.querySelector('.form button');
const inputBox = document.querySelector('.form input');
const qrImage = document.getElementById('qrImage');
const downloadBtn = document.getElementById('downloadBtn');

// Generate QR Code
generateBtn.addEventListener('keydown', () => {
    let inputValue = inputBox.value.trim();
    if (!inputValue) return; // Exit if input is empty
    
    // Set the QR code image source using the API
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
    wrapper.classList.add('active');
    
    // Hide the download button until image is loaded
    downloadBtn.style.display = 'none';
});

