const NotFound = () => {
    const element = document.createElement('div');
    element.innerHTML = `<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>`;
    return element;
};

export default NotFound;
