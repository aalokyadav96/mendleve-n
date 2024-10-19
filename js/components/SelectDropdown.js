export const SelectDropdown = (options, id) => {
    const select = document.createElement('select');
    select.id = id;

    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.text = option.label;
        select.add(opt);
    });

    return select;
};
