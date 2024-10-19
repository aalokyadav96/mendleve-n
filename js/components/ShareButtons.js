export const ShareButtons = (url) => {
    const container = document.createElement('div');
    container.className = 'share-buttons';

    const platforms = ['Facebook', 'Twitter', 'LinkedIn'];

    platforms.forEach(platform => {
        const button = document.createElement('button');
        button.innerText = `Share on ${platform}`;
        button.onclick = () => {
            const shareUrl = `https://www.${platform.toLowerCase()}.com/share?url=${encodeURIComponent(url)}`;
            window.open(shareUrl, '_blank');
        };
        container.appendChild(button);
    });

    return container;
};
