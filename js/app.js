import { navigateTo, renderPage } from './router.js'; // Ensure both functions are imported
import { subscribe } from './store.js';
import { Navbar } from './components/Navbar.js';

const App = () => {
    const element = document.createElement('div');
    const navbar = Navbar([
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Login', href: '/login' },
        { text: 'Register', href: '/register' },
        { text: 'Dashboard', href: '/dashboard' },
        { text: 'Profile', href: '/profile' },
        { text: 'Settings', href: '/settings' },
    ], navigateTo);
    
    element.appendChild(navbar);
    renderPage(window.location.pathname); // Call renderPage directly

    return element;
};

document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(App());
});
