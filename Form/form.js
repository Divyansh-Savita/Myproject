document.addEventListener('DOMContentLoaded', () => {
    const formSteps = document.querySelectorAll('.form-step');
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const form = document.getElementById('multi-step-form');
    const clearDataBtn = document.getElementById('clear-data-btn');
    const notification = document.getElementById('notification');
    const canvas = document.getElementById('signature-pad');
    const ctx = canvas.getContext('2d');
    let currentStep = 0;
    let drawing = false;

    // Load saved data from localStorage
    loadFormData();

    nextBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (validateForm(formSteps[currentStep])) {
                saveFormData(); // Save data to localStorage before moving to next step
                formSteps[currentStep].classList.remove('active');
                currentStep = (currentStep + 1) % formSteps.length;
                formSteps[currentStep].classList.add('active');
            }
        });
    });

    prevBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            formSteps[currentStep].classList.remove('active');
            currentStep = (currentStep - 1 + formSteps.length) % formSteps.length;
            formSteps[currentStep].classList.add('active');
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        saveFormData(); // Save data to localStorage on form submission
        if (!isSignaturePadEmpty()) {
            alert('Form submitted!');
            localStorage.removeItem('formData'); // Clear data from localStorage after submission
            form.reset(); // Reset the form
            clearSignaturePad();
            formSteps[currentStep].classList.remove('active');
            currentStep = 0;
            formSteps[currentStep].classList.add('active');
            showNotification();
        } else {
            alert('Please provide a signature.');
        }
    });

    clearDataBtn.addEventListener('click', () => {
        localStorage.removeItem('formData'); // Clear data from localStorage
        form.reset(); // Reset the form
        clearSignaturePad();
        formSteps[currentStep].classList.remove('active');
        currentStep = 0;
        formSteps[currentStep].classList.add('active');
    });

    // Signature Pad
    canvas.addEventListener('mousedown', () => drawing = true);
    canvas.addEventListener('mouseup', () => drawing = false);
    canvas.addEventListener('mouseout', () => drawing = false);
    canvas.addEventListener('mousemove', draw);

    function draw(event) {
        if (!drawing) return;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000';
        
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.offsetX, event.offsetY);
    }

    function clearSignaturePad() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function isSignaturePadEmpty() {
        const blank = document.createElement('canvas');
        blank.width = canvas.width;
        blank.height = canvas.height;
        return canvas.toDataURL() === blank.toDataURL();
    }

    function validateForm(step) {
        const inputs = step.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].checkValidity()) {
                inputs[i].reportValidity();
                return false;
            }
        }
        return true;
    }

    function saveFormData() {
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        localStorage.setItem('formData', JSON.stringify(formObject));
    }

    function loadFormData() {
        const savedData = JSON.parse(localStorage.getItem('formData'));
        if (savedData) {
            for (const key in savedData) {
                if (savedData.hasOwnProperty(key)) {
                    const input = form.querySelector(`[name=${key}]`);
                    if (input) {
                        input.value = savedData[key];
                    }
                }
            }
        }
    }

    function showNotification() {
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }
});
