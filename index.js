const scriptURL =
  "https://script.google.com/macros/s/AKfycbwg0AAgyVod4Pgke0kRsm1w2vfaPaQnReOSBwc3RGyghjmpxBJFf2jtcBWcnECnvoGe/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thanks for Subscribing!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
