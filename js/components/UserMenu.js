export const UserMenu = (options) => {
    const menu = document.createElement('div');
    menu.className = 'user-menu';

    options.forEach(option => {
        const a = document.createElement('a');
        a.href = option.href;
        a.innerText = option.text;
        menu.appendChild(a);
    });

    return menu;
};
