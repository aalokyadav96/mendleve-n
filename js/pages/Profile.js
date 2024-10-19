import { getUser, setUser } from '../store.js';
import { InputField } from '../components/InputField.js';
import { Button } from '../components/Button.js';

const Profile = () => {
    const element = document.createElement('div');
    const user = getUser();

    if (!user) {
        element.innerHTML = `<h1>Please log in to view your profile.</h1>`;
        return element;
    }

    element.innerHTML = `<h1>Your Profile</h1>`;
    const nameInput = InputField('Name', user.name);
    const emailInput = InputField('Email', user.email); // Assuming user has an email
    const updateButton = Button('Update', (event) => {
        event.preventDefault();
        const updatedUser = { ...user, name: nameInput.value, email: emailInput.value };
        setUser(updatedUser);
        element.innerHTML = `<h1>Profile updated!</h1>`;
        element.appendChild(Profile());
    });

    element.appendChild(nameInput);
    element.appendChild(emailInput);
    element.appendChild(updateButton);
    return element;
};

export default Profile;
