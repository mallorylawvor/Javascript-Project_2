//RECIPE POP UP MODAL SECTION

//Sets up the button that will open the recipe modal
var btns = document.querySelectorAll("input.modal-button");

//Defines all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

//Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn");

//when the user clicks the recipe button open the modal
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute
            ("href"));
        modal.style.display = "block";
    }
}

//When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";
            }
        }
    }
}

//EMAIL VALIDATION

document.getElementById('contactForm').addEventListener('submit',
    function (event) {
        //override the default browser refresh when the submit 
        //button is pressed
        event.preventDefault();

        //Variables to validate that each field is filled out
        const firstName = document.getElementById('firstName').value;
        const lasttName = document.getElementById('lasttName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        //email pattern checks for all symbols that would be needed
        //for an email address such as the @ and . and the text 
        //that would come before, between, and after
        const emailPattern = (/^[a-zA-Z0-9._-] + @[[a-zA-Z0-9._-] + [a-zA-Z0-9._-]{2,4}$/);
        //use this variable to display message if fields are filled 
        //out or thank you message
        const valMsg = document.getElementById('validateMSsg');

        if (!firstName || !lasttName || phone || message) {
    // checks if field have been filled out
    valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fileds </p>'
} else if (!emailPattern.test(email)) {
    // check if there is a valid email
    valMsg.innerHTML = '<p style="color: red;">Please enter a va vaild email</p>'
} else {
    // of all fields are filled out correctly, display thank you mesage
    valMsg.innerHTML = '<p style = "color: red;">Thank you for submitting!</p>'
}
const formData = {
    firstName: firstName,
    lasttName: lasttName,
    email: email,
    phone: phone,
    message: message,
    subscribe: document.getElementById('subscription').checked
};

// display what the user wrote in hte consloe
console.log(JSON.stringify(formData))
    }
)
