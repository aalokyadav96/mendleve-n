import { setUser } from '../store.js';
import { RegisterForm } from '../components/RegisterForm.js'; // Adjust the path if necessary
import { navigateTo } from '../router.js';

const Register = () => {
    const element = document.createElement('div');
    element.innerHTML = `<h1>Register</h1>`;
    
    const registerForm = RegisterForm((user) => {
        setUser(user); // Set the user object that includes name
        navigateTo('/dashboard');
    });

    element.appendChild(registerForm);
    
    return element;
};

export default Register;

// import { setUser } from '../store.js';
// import { RegisterForm } from '../components/RegisterForm.js';
// import { navigateTo } from '../router.js';
// import { getUser } from '../store.js';

// const Register = () => {
//     const user = getUser();

//     if (user) {
//         // Redirect only after the component has finished rendering
//         setTimeout(() => navigateTo('/'), 0);
//         return; // Prevent further execution
//     }

//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Register</h1>`;
    
//     const registerForm = RegisterForm((user) => {
//         setUser(user);
//         navigateTo('/dashboard');
//     });

//     element.appendChild(registerForm);
    
//     return element;
// };

// export default Register;

// import { setUser } from '../store.js';
// import { RegisterForm } from '../components/RegisterForm.js'; // Adjust if necessary
// import { navigateTo } from '../router.js';
// import { getUser } from '../store.js'; // Import getUser

// const Register = () => {
//     const user = getUser(); // Check if user is logged in

//     if (user) {
//         // If user is already logged in, redirect to home
//         navigateTo('/');
//         return; // Prevent further execution
//     }

//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Register</h1>`;
    
//     const registerForm = RegisterForm((user) => {
//         setUser(user);
//         navigateTo('/dashboard');
//     });

//     element.appendChild(registerForm);
    
//     return element;
// };

// export default Register;

// import { setUser } from '../store.js';
// import { RegisterForm } from '../components/RegisterForm.js'; // Assuming you have this component
// import { navigateTo } from '../router.js';

// const Register = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Register</h1>`;

//     const registerForm = RegisterForm((user) => {
//         setUser(user);
//         navigateTo('/dashboard');
//     });

//     element.appendChild(registerForm);
//     return element;
// };

// export default Register;
