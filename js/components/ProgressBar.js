export const ProgressBar = (initialValue = 0) => {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.width = `${initialValue}%`;

    const fill = document.createElement('div');
    fill.className = 'fill';
    fill.style.width = `${initialValue}%`;

    progressBar.appendChild(fill);

    return {
        element: progressBar,
        setProgress: (value) => {
            fill.style.width = `${value}%`;
        }
    };
};
