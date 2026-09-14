function selectTrack(trackValue) {
    const trackSelect = document.getElementById('track');
    if (trackSelect) {
        trackSelect.value = trackValue;
    }
}

function submitToGoogleForms(e) {
    e.preventDefault();
    const form = e.target;
    const emailInput = document.getElementById('email');
    const errorMsg = document.getElementById('error-msg');

    // Reset any previous error state
    errorMsg.hidden = true;
    errorMsg.textContent = '';

    // 1. Check all required fields are filled (native browser validation)
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // 2. Check email follows a standard pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        errorMsg.textContent = 'Please enter a valid email address.';
        errorMsg.hidden = false;
        emailInput.focus();
        return;
    }

    // If both checks pass, proceed with submission
    let iframe = document.getElementById('hidden_iframe');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.name = 'hidden_iframe';
        iframe.id = 'hidden_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
    }

    form.target = 'hidden_iframe';
    form.action = "https://docs.google.com/forms/d/e/1FAIpQLSci95C1HWa6-WbhquZfs-9tYM1A88LAkD40Zh7d3uMulxF-LQ/formResponse";
    form.method = "POST";
    form.submit();

    setTimeout(() => {
        document.getElementById('successModal').classList.add('active');
        form.reset();
    }, 1000);
}

