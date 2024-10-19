import { setUser } from '../store.js';
import { LoginForm } from '../components/LoginForm.js';
import { navigateTo } from '../router.js';
import { getUser } from '../store.js';

const Login = () => {
    const user = getUser();

    if (user) {
        // Redirect only after the component has finished rendering
        setTimeout(() => navigateTo('/'), 0);
        return; // Prevent further execution
    }

    const element = document.createElement('div');
    element.innerHTML = `<h1>Login</h1>`;
    
    const loginForm = LoginForm((user) => {
        setUser(user);
        navigateTo('/dashboard');
    });

    element.appendChild(loginForm);
    
    return element;
};

export default Login;

// import { setUser } from '../store.js';
// import { LoginForm } from '../components/LoginForm.js';
// import { navigateTo } from '../router.js';
// import { getUser } from '../store.js'; // Import getUser

// const Login = () => {
//     const user = getUser(); // Check if user is logged in

//     if (user) {
//         // If user is already logged in, redirect to home
//         navigateTo('/');
//         return; // Prevent further execution
//     }

//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Login</h1>`;
    
//     const loginForm = LoginForm((user) => {
//         setUser(user);
//         navigateTo('/dashboard');
//     });

//     element.appendChild(loginForm);
    
//     return element;
// };

// export default Login;


// import { setUser } from '../store.js';
// import { LoginForm } from '../components/LoginForm.js';
// import { navigateTo } from '../router.js';

// const Login = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Login</h1>`;
    
//     const loginButton = LoginForm((user) => {
//         setUser(user);
//         navigateTo('/dashboard');
//     });

//     element.appendChild(loginButton);
    
//     return element;
// };

// export default Login;
