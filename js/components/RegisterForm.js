import { InputField } from './InputField.js'; // Ensure the path is correct
import { Button } from './Button.js';

export const RegisterForm = (onRegister) => {
    const form = document.createElement('form');

    const usernameInput = InputField('Username', 'username');
    const passwordInput = InputField('Password', 'password');
    
    const submitButton = Button('Register', (event) => {
        event.preventDefault();
        const user = {
            name: usernameInput.value, // Collecting the username
            password: passwordInput.value // You might want to handle this differently
        };
        onRegister(user); // Pass the user object to the onRegister callback
    });

    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);

    return form;
};

// import { InputField } from '../components/InputField.js'; // Add .js extension
// import { Button } from '../components/Button.js'; // Add .js extension

// export const RegisterForm = (onRegister) => {
//     const form = document.createElement('form');

//     const usernameInput = InputField('Username', 'username');
//     const passwordInput = InputField('Password', 'password');
//     const registerButton = Button('Register', (event) => {
//         event.preventDefault();
//         onRegister(usernameInput.value, passwordInput.value);
//     });

//     form.appendChild(usernameInput);
//     form.appendChild(passwordInput);
//     form.appendChild(registerButton);

//     return form;
// };
