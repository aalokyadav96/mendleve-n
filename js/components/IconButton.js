export const IconButton = (icon, text, onClick) => {
    const button = document.createElement('button');
    button.innerHTML = `${icon} ${text}`;
    button.onclick = onClick;
    return button;
};
