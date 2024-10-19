export const SearchBar = (placeholder, onSearch) => {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;

    input.addEventListener('input', () => {
        onSearch(input.value);
    });

    return input;
};
