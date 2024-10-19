export const Accordion = (title, content) => {
    const accordion = document.createElement('div');
    accordion.className = 'accordion';

    const header = document.createElement('h3');
    header.innerText = title;
    accordion.appendChild(header);

    const body = document.createElement('div');
    body.innerHTML = content;

    header.onclick = () => {
        body.style.display = body.style.display === 'block' ? 'none' : 'block';
    };

    accordion.appendChild(body);
    return accordion;
};
