export const UserAvatar = (src, alt) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.className = 'user-avatar';
    return img;
};
