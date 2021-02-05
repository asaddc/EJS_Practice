window.addEventListener("load", fireEventListeners, false);

function fireEventListeners() {
  document
    .getElementById("email")
    .addEventListener("keyup", addPulseEffectOnFormCompletion, false);

  document
    .getElementById("password")
    .addEventListener("keyup", addPulseEffectOnFormCompletion, false);
}

function addPulseEffectOnFormCompletion() {
  const submitBtn = document.getElementById("submit");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    submitBtn.classList.add("pulse");
    submitBtn.classList.remove("disabled");
  } else {
    submitBtn.classList.add("disabled");
    submitBtn.classList.remove("pulse");
  }
}
