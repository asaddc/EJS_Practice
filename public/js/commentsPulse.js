window.addEventListener("load", fireEventListeners, false);

function fireEventListeners() {
  document
    .getElementById("courseCode")
    .addEventListener("keyup", addPulseEffectOnFormCompletion, false);

  document
    .getElementById("courseName")
    .addEventListener("keyup", addPulseEffectOnFormCompletion, false);

  document
    .getElementById("email")
    .addEventListener("keyup", addPulseEffectOnFormCompletion, false);
}

function addPulseEffectOnFormCompletion() {
  const submitBtn = document.getElementById("submit");
  const email = document.getElementById("email").value;
  const courseName = document.getElementById("courseName").value;
  const courseCode = document.getElementById("courseCode").value;

  if (email && courseName && courseCode) {
    submitBtn.classList.add("pulse");
    submitBtn.classList.remove("disabled");
  } else {
    submitBtn.classList.add("disabled");
    submitBtn.classList.remove("pulse");
  }
}
