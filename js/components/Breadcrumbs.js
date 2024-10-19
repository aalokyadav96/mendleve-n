export const Breadcrumbs = (items) => {
    const nav = document.createElement('nav');
    const ol = document.createElement('ol');
    
    items.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.innerText = item.text;
        li.appendChild(a);
        ol.appendChild(li);
    });
    
    nav.appendChild(ol);
    return nav;
};
