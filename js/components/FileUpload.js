export const FileUpload = (id) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.id = id;
    return input;
};
