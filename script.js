var typed = new Typed(".auto-type", {
    strings: ["Front-End Developer", "Freelancer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})

// ============ SLIDE ANIMATION ========== \\

AOS.init();

// ============ SENDMAIL ========== \\

function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_gtpe9te", "template_wnnhiu1", params).then(function (res) {
        alert("Message sent successfully! " + res.status);
    })
}
function SendMail() {
    alert("Message sent successfully!");
}