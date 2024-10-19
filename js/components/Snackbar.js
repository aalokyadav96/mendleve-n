export const Snackbar = (message) => {
    const snackbar = document.createElement('div');
    snackbar.className = 'snackbar';
    snackbar.innerText = message;

    document.body.appendChild(snackbar);
    setTimeout(() => {
        snackbar.classList.add('show');
        setTimeout(() => {
            snackbar.classList.remove('show');
            snackbar.remove();
        }, 3000);
    }, 100);
    
    return snackbar;
};
