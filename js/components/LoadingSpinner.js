export const LoadingSpinner = () => {
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    spinner.innerText = 'Loading...';
    return spinner;
};
