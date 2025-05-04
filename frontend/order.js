let currentStep = 0;
const totalSteps = 3;

function updateProgressBar() {
  for (let i = 0; i < totalSteps; i++) {
    const step = document.getElementById('step-' + i);
    if (i <= currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  }

  const fill = document.getElementById('progress-fill');
  fill.style.width = (currentStep / (totalSteps - 1)) * 80 + '%';

  const doneMsg = document.getElementById('done-message');
  doneMsg.style.display = currentStep === totalSteps - 1 ? 'block' : 'none';
}

function nextStep() {
  if (currentStep < totalSteps - 1) {
    currentStep++;
    updateProgressBar();
  }
}

function resetStatus() {
  currentStep = 0;
  updateProgressBar();
}

// Initialize
updateProgressBar();