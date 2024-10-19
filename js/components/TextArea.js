export const TextArea = (placeholder, id) => {
    const textarea = document.createElement('textarea');
    textarea.placeholder = placeholder;
    textarea.id = id;
    return textarea;
};
