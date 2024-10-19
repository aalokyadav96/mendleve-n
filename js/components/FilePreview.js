export const FilePreview = (inputId) => {
    const preview = document.createElement('div');
    preview.className = 'file-preview';

    const input = document.getElementById(inputId);
    input.addEventListener('change', () => {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = document.createElement('img');
                img.src = event.target.result;
                preview.innerHTML = ''; // Clear previous preview
                preview.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });

    return preview;
};
