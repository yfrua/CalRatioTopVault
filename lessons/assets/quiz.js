// Lightweight interactive quiz widget for retrieval practice
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".quiz-box").forEach((box) => {
    const options = box.querySelectorAll(".quiz-option");
    const feedback = box.querySelector(".quiz-feedback");

    options.forEach((opt) => {
      opt.addEventListener("click", () => {
        if (box.dataset.answered === "true") return;
        box.dataset.answered = "true";

        const isCorrect = opt.dataset.correct === "true";
        if (isCorrect) {
          opt.classList.add("correct");
          feedback.classList.add("show");
          feedback.style.background = "var(--correct-bg)";
          feedback.style.color = "#137333";
          feedback.innerHTML = "<strong>Correct!</strong> " + (opt.dataset.feedback || "Well done.");
        } else {
          opt.classList.add("incorrect");
          feedback.classList.add("show");
          feedback.style.background = "var(--incorrect-bg)";
          feedback.style.color = "#c5221f";
          feedback.innerHTML = "<strong>Incorrect.</strong> " + (opt.dataset.feedback || "Review the explanation above.");

          // Highlight the correct one
          options.forEach((o) => {
            if (o.dataset.correct === "true") o.classList.add("correct");
          });
        }
      });
    });
  });
});
