export const Checkbox = (label, id) => {
    const checkboxWrapper = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id;

    const labelElement = document.createElement('label');
    labelElement.htmlFor = id;
    labelElement.innerText = label;

    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(labelElement);

    return checkboxWrapper;
};
