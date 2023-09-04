

var navlinks = document.getElementById("navlinks");

function showMenu() {
    navlinks.style.display = "block";
}

function hideMenu() {
    navlinks.style.display = "none";
}






let selectedImages = [];

function toggleHighlight(image) {
    const sendButton = document.getElementById("sendButton");
    if (!selectedImages.includes(image.src)) {
        selectedImages.push(image.src);
        image.classList.add("highlight");
        sendButton.style.display = "block";
    } else {
        selectedImages = selectedImages.filter((img) => img !== image.src);
        image.classList.remove("highlight");
        if (selectedImages.length === 0) {
            sendButton.style.display = "none";
        }
    }
}

function sendEmail() {
    const recipient = "arthuronyeanusi@gmail.com, Forbystyles@gmail.com";
    const subject = "Selected Images";
    const defaultMessage = "Hi ForbyStyles, i would love to have these designs, please reply ASAP";
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(defaultMessage + "\n\nSelected Images:\n" + selectedImages.join("\n"))}`;

    window.location.href = mailtoLink;
}

