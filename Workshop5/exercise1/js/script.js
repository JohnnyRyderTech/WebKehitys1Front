// Lomakkeen validointi
function validateForm() {

    // Haetaan kentät
    const emailField = document.getElementById("email");
    const commentField = document.getElementById("comment");

    // Haetaan virheilmoitus-elementit
    const emailError = document.getElementById("emailError");
    const commentError = document.getElementById("commentError");

    // Otetaan arvot ja siistitään (trim)
    let email = emailField.value.trim();
    let comment = commentField.value.trim();

    // Nollataan vanhat virheet
    emailField.classList.remove("error");
    commentField.classList.remove("error");
    emailError.textContent = "";
    commentError.textContent = "";

    let valid = true;

    // Email-validointi
    if (email.length < 6 || email.length >= 15 || !email.includes("@")) {
        emailField.classList.add("error");
        emailError.textContent = "Email must be 6–15 chars and include @";
        valid = false;
    }

    // Kommentin validointi
    if (comment === "") {
        commentField.classList.add("error");
        commentError.textContent = "Comment cannot be empty";
        valid = false;
    } 
    else if (comment.length > 50) {
        // Lyhennetään kommentti max 50 merkkiin
        comment = comment.substring(0, 50);
        commentField.value = comment;
    }

    // Jos virheitä → estetään lähetys
    if (!valid) {
        return false;
    }

    // Näytetään arvot alertilla
    alert("Email: " + email);
    alert("Comment: " + comment);

    return false; // estää oikean lähetyksen (harjoitusta varten)
}