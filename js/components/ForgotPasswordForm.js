import { InputField } from './InputField.js';
import { Button } from './Button.js';

export const ForgotPasswordForm = (onReset) => {
    const form = document.createElement('form');

    const emailInput = InputField('Email', 'email');
    const resetButton = Button('Reset Password', (event) => {
        event.preventDefault();
        onReset(emailInput.value);
    });

    form.appendChild(emailInput);
    form.appendChild(resetButton);

    return form;
};
