const form = document.getElementById("feedback-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");

const charCount = document.getElementById("char-count");
const tooltip = document.getElementById("tooltip");
const feedbackDisplay = document.getElementById("feedback-display");


// Character Counter
commentsInput.addEventListener("input", function () {
    charCount.textContent = commentsInput.value.length;
});


// Event Bubbling & Delegation
form.addEventListener("mouseover", function(event){

    if(event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA"){

        if(event.target.id === "name"){
            tooltip.textContent = "Enter your full name.";
        }

        if(event.target.id === "email"){
            tooltip.textContent = "Enter a valid email address.";
        }

        if(event.target.id === "comments"){
            tooltip.textContent = "Type your feedback here.";
        }

    }

});


form.addEventListener("mouseout", function(event){

    if(event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA"){
        tooltip.textContent = "";
    }

});


// Keyboard Event
commentsInput.addEventListener("keydown", function(event){
    console.log("Key Pressed:", event.key);
});


// Form Submission
form.addEventListener("submit", function(event){

    event.preventDefault();

    if(
        nameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        commentsInput.value.trim() === ""
    ){
        alert("Please complete all fields.");
        return;
    }

    const newEntry = document.createElement("div");

    newEntry.classList.add("feedback-entry");

    newEntry.innerHTML = `
        <h3>${nameInput.value}</h3>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p>${commentsInput.value}</p>
    `;

    feedbackDisplay.appendChild(newEntry);

    form.reset();
    charCount.textContent = "0";

});


// Stop Propagation
form.addEventListener("click", function(event){
    event.stopPropagation();
});

document.body.addEventListener("click", function(){
    console.log("Background clicked.");
});