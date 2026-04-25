window.onload = function () {

    // --- Requirement 5: Homepage footer timestamp ---
    var footer = document.querySelector("footer");
    if (footer) {
        var newParagraph = document.createElement("p");
        var currentDate = new Date();
        var textNode = document.createTextNode("Page loaded on: " + currentDate.toString());
        newParagraph.appendChild(textNode);
        footer.appendChild(newParagraph);
    }

    // --- Requirement 4: CV page blockquote event handling ---
    var blockquote = document.querySelector("blockquote");
    if (blockquote) {
        blockquote.addEventListener("mouseover", function () {
            blockquote.style.backgroundColor = "#e8f0fe";
            blockquote.style.fontStyle = "italic";
        });
        blockquote.addEventListener("mouseout", function () {
            blockquote.style.backgroundColor = "";
            blockquote.style.fontStyle = "";
        });
    }

};


// ============================================================
// REQUIREMENT 2: Form Validation (contact.html)
// ============================================================
function validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");

    if (name.value === "" || email.value === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    return true;
}


// ============================================================
// REQUIREMENT 3: DOM Manipulation (projects.html)
// ============================================================
function toggleDescription(descId) {
    var desc = document.getElementById(descId);
    if (desc.style.display === "none") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}
