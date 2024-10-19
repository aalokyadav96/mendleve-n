export const FilterOptions = (options, onFilter) => {
    const container = document.createElement('div');

    options.forEach(option => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = option.id;

        const label = document.createElement('label');
        label.htmlFor = option.id;
        label.innerText = option.label;

        checkbox.addEventListener('change', () => {
            onFilter(option.id, checkbox.checked);
        });

        container.appendChild(checkbox);
        container.appendChild(label);
    });

    return container;
};
