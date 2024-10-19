import { Button } from '../components/Button.js';
import { navigateTo } from '../router.js';
import { getUser } from '../store.js'; // Import getUser

const Home = () => {
    const element = document.createElement('div');
    element.innerHTML = `<h1>Home</h1>`;

    const user = getUser(); // Check if user is logged in

    if (!user) {
        // Only show buttons if the user is not logged in
        const aboutButton = Button('Go to About', () => navigateTo('/about'));
        const loginButton = Button('Login', () => navigateTo('/login'));
        const registerButton = Button('Register', () => navigateTo('/register'));

        element.appendChild(aboutButton);
        element.appendChild(loginButton);
        element.appendChild(registerButton);
    } else {
        // If user is logged in, maybe show a welcome message
        element.innerHTML += `<p>Welcome back, ${user.name}!</p>`;
    }

    return element;
};

export default Home;

// import { Button } from '../components/Button.js';
// import { navigateTo } from '../router.js';

// const Home = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Home</h1>`;
    
//     const aboutButton = Button('Go to About', () => navigateTo('/about'));
//     const loginButton = Button('Login', () => navigateTo('/login'));
//     const dashboardButton = Button('Dashboard', () => navigateTo('/dashboard'));
//     const registerButton = Button('Register', () => navigateTo('/register'));
//     const profileButton = Button('Profile', () => navigateTo('/profile'));
//     const settingsButton = Button('Settings', () => navigateTo('/settings'));
    
//     element.appendChild(aboutButton);
//     element.appendChild(loginButton);
//     element.appendChild(dashboardButton);
//     element.appendChild(registerButton);
//     element.appendChild(profileButton);
//     element.appendChild(settingsButton);
    
//     return element;
// };

// export default Home;
