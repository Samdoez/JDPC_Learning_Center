function selectTrack(trackValue) {
    const trackSelect = document.getElementById('track');
    if (trackSelect) {
        trackSelect.value = trackValue;
    }
}

function submitToGoogleForms(e) {
    e.preventDefault();
    const form = e.target;
    
    // Create or locate a persistent hidden iframe
    let iframe = document.getElementById('hidden_iframe');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.name = 'hidden_iframe';
        iframe.id = 'hidden_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
    }

    // Set form target to the hidden iframe and trigger native submission
    form.target = 'hidden_iframe';
    form.action = "https://docs.google.com/forms/d/e/1FAIpQLSci95C1HWa6-WbhquZfs-9tYM1A88LAkD40Zh7d3uMulxF-LQ/formResponse";
    form.method = "POST";

    // Submit natively via iframe target
    form.submit();

    // Reset form and notify user after transmission delay
    setTimeout(() => {
        alert("Thank you for joining the Cohort 3 waitlist!");
        form.reset();
    }, 1000);
}