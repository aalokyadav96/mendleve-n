export const StepIndicator = (steps, currentStep) => {
    const stepIndicator = document.createElement('div');
    stepIndicator.className = 'step-indicator';

    steps.forEach((step, index) => {
        const stepItem = document.createElement('div');
        stepItem.className = index === currentStep ? 'step active' : 'step';
        stepItem.innerText = step;
        stepIndicator.appendChild(stepItem);
    });

    return stepIndicator;
};
