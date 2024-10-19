import { InputField } from './InputField.js'; // Adjust the path if necessary
import { Button } from './Button.js';

export const LoginForm = (onLogin) => {
    const form = document.createElement('form');

    const usernameInput = InputField('Username', 'username');
    const passwordInput = InputField('Password', 'password');
    
    const submitButton = Button('Login', (event) => {
        event.preventDefault();
        const user = { name: usernameInput.value }; // Create a user object
        onLogin(user); // Call the onLogin callback
    });

    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);

    return form;
};


// import { InputField } from './InputField.js';
// import { Button } from './Button.js';

// export const LoginForm = (onLogin) => {
//     const form = document.createElement('form');

//     const usernameInput = InputField('Username', 'username');
//     const passwordInput = InputField('Password', 'password');
//     const loginButton = Button('Login', (event) => {
//         event.preventDefault();
//         onLogin(usernameInput.value, passwordInput.value);
//     });

//     form.appendChild(usernameInput);
//     form.appendChild(passwordInput);
//     form.appendChild(loginButton);

//     return form;
// };
