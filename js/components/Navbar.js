export const Navbar = (links) => {
    const nav = document.createElement('nav');
    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.innerText = link.text;
        nav.appendChild(a);
    });
    return nav;
};
