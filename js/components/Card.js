export const Card = (content) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = content;
    return card;
};
