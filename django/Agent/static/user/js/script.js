console.log("working");

document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.getElementById("message");
    const send = document.querySelector(".send");
    const photo = document.querySelector(".photo");
  
    document.body.addEventListener("contextmenu", function(e) {
        if (e.target.classList.contains("blue-tick")) {
            e.preventDefault();
        }
    });
  
    photo.style.display = "block";
    send.style.display = "none";
  
    textarea.addEventListener("input", function() {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
        if (textarea.value.trim().length > 0) {
            send.style.display = "block";
            photo.style.display = "none";
        } else {
            send.style.display = "none";
            photo.style.display = "block";
        }
    });
  
    document.querySelector(".person").addEventListener("click", function() {
        textarea.focus();
    });
  
    function add() {
        var message = textarea.value.trim();
        var messagesDiv = document.querySelector(".messages");
        messagesDiv.innerHTML += "<div class='clip sent'><div class='text'>" + message + "</div></div>";
        var contentDiv = document.querySelector(".content");
        contentDiv.innerHTML = "<div class='message'><b>You :</b> " + message + "</div>";
        textarea.value = "";
        send.style.display = "none";
        photo.style.display = "block";
  
        textarea.focus();
        textarea.style.height = "";
    }
  
    send.addEventListener("click", function() {
        add();
    });
  
    textarea.addEventListener("keydown", function(event) {
        if (event.keyCode == 13 && !event.shiftKey) {
            if (textarea.value.trim().length > 0) {
                send.removeAttribute("disabled");
                add();
            }
            event.preventDefault();
        }
    });
});
