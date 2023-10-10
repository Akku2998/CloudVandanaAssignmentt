function submitForm(event) {
    event.preventDefault(); 
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderMale = document.getElementById('male').checked;
    const genderFemale = document.getElementById('female').checked;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    const popupContent = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${genderMale ? 'Male' : ''} ${genderFemale ? 'Female' : ''}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;
    document.getElementById('popup-content').innerHTML = popupContent;
    document.getElementById('popup').style.display = 'block';

    document.getElementById('surveyForm').reset();
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
