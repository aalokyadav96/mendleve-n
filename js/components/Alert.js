export const Alert = (message, type = 'info') => {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerText = message;

    // Auto-remove after a timeout
    setTimeout(() => {
        alert.remove();
    }, 3000);

    return alert;
};
