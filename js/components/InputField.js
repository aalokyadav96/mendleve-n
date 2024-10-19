export const InputField = (placeholder, id, validationFn) => {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
    input.id = id;

    input.addEventListener('input', () => {
        if (validationFn) {
            const isValid = validationFn(input.value);
            input.setCustomValidity(isValid ? '' : 'Invalid input');
            input.reportValidity();
        }
    });

    return input;
};
