export const Toast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;

    setTimeout(() => {
        toast.remove();
    }, 3000);

    return toast;
};
