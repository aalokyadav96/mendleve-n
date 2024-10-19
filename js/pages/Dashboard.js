import { getUser, setUser } from '../store.js';
// import { SearchBar } from '../components/SearchBar.js';
import { navigateTo } from '../router.js';
import { Button } from '../components/Button.js';

const Dashboard = () => {
    const element = document.createElement('div');
    const user = getUser();

    element.innerHTML = `<h1>Dashboard</h1>`;
    element.innerHTML += user ? `<p>Welcome, ${user.name}!</p>` : `<p>Please log in.</p>`;

    // const searchBar = SearchBar((query) => {
    //     navigateTo(`/search?query=${encodeURIComponent(query)}`);
    // });

    // element.appendChild(searchBar);

    if (user) {
        const logoutButton = Button('Logout', () => {
            setUser(null); // Clear user state
            localStorage.removeItem('user'); // Remove user from localStorage
            navigateTo('/'); // Redirect to home
        });
        element.appendChild(logoutButton);
    }

    return element;
};

export default Dashboard;

// import { getUser } from '../store.js'; // Make sure to import getUser
// // import { SearchBar } from '../components/SearchBar.js';
// // import { navigateTo } from '../router.js';

// const Dashboard = () => {
//     const element = document.createElement('div');
//     const user = getUser();

//     element.innerHTML = `<h1>Dashboard</h1>`;
//     element.innerHTML += user ? `<p>Welcome, ${user.name}!</p>` : `<p>Please log in.</p>`;

//     // const searchBar = SearchBar((query) => {
//     //     // Redirect to the SearchResults page with the query as a parameter
//     //     navigateTo(`/search?query=${encodeURIComponent(query)}`);
//     // });

//     // element.appendChild(searchBar);
//     return element;
// };

// export default Dashboard;


// import { getUser, setUser } from '../store.js';
// import { Button } from '../components/Button.js';
// import { navigateTo } from '../router.js';

// const Dashboard = () => {
//     const element = document.createElement('div');
//     const user = getUser();
//     const loginButton = Button('Login', () => navigateTo('/login'));

//     element.innerHTML = `<h1>Dashboard</h1>`;
//     element.innerHTML += user ? `<p>Welcome, ${user.name}!</p>` : `<p>Please log in.</p>`;

//     if (user) {
//         const logoutButton = Button('Logout', () => {
//             setUser(null); // Clear user state
//             navigateTo('/'); // Redirect to home
//         });
//         element.appendChild(logoutButton);
//     } else {
//         element.appendChild(loginButton);
//     }

//     return element;
// };

// export default Dashboard;
