export const Sidebar = (links) => {
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';
    
    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.innerText = link.text;
        sidebar.appendChild(a);
    });

    return sidebar;
};
