const routes = {
    '/': 'Home',
    '/about': 'About',
    '/login': 'Login',
    '/dashboard': 'Dashboard',
    '/register': 'Register',
    '/profile': 'Profile',
    '/settings': 'Settings',
    '/search': 'SearchResults', // Ensure this route is included
};

export const navigateTo = (path) => {
    window.history.pushState({}, path, window.location.origin + path);
    renderPage(path);
};

// Make sure this function is exported
export const renderPage = (path) => {
    const app = document.getElementById('app');
    app.innerHTML = '';

    const page = routes[path.split('?')[0]] || '404'; // Handle query parameters
    const query = new URLSearchParams(window.location.search).get('query');

    import(`./pages/${page}.js`)
        .then(module => {
            const pageElement = module.default(query); // Pass the query to SearchResults
            app.appendChild(pageElement);
        })
        .catch(() => {
            app.innerHTML = '<h1>404 Not Found</h1>';
        });
};

window.onpopstate = () => {
    renderPage(window.location.pathname);
};


// const routes = {
//     '/': 'Home',
//     '/about': 'About',
//     '/login': 'Login',
//     '/dashboard': 'Dashboard',
//     '/register': 'Register',
//     '/profile': 'Profile',
//     '/settings': 'Settings',
//     '/search': 'SearchResults', // Add this line
// };

// export const navigateTo = (path) => {
//     window.history.pushState({}, path, window.location.origin + path);
//     renderPage(path);
// };


// // Make sure to export renderPage
// // export const renderPage = (path) => {
// //     const app = document.getElementById('app');
// //     app.innerHTML = '';

// //     const page = routes[path] || '404'; // Use a 404 page if not found
// //     import(`./pages/${page}.js`)
// //         .then(module => {
// //             const pageElement = module.default();
// //             app.appendChild(pageElement);
// //         })
// //         .catch(() => {
// //             app.innerHTML = '<h1>404 Not Found</h1>';
// //         });
// // };

// window.onpopstate = () => {
//     renderPage(window.location.pathname);
// };
