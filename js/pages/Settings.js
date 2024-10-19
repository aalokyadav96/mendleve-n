import { getUser, setUser } from '../store.js';
import { InputField } from '../components/InputField.js';
import { Button } from '../components/Button.js';

const Settings = () => {
    const element = document.createElement('div');
    const user = getUser();

    if (!user) {
        element.innerHTML = `<h1>Please log in to view your Settings.</h1>`;
        return element;
    }

    element.innerHTML = `<h1>Settings</h1>`;

    // Add some example settings options
    const themeSelect = document.createElement('select');
    const lightOption = document.createElement('option');
    lightOption.value = 'light';
    lightOption.textContent = 'Light Theme';
    const darkOption = document.createElement('option');
    darkOption.value = 'dark';
    darkOption.textContent = 'Dark Theme';

    themeSelect.appendChild(lightOption);
    themeSelect.appendChild(darkOption);

    const saveButton = Button('Save Settings', () => {
        const selectedTheme = themeSelect.value;
        // Save the selected theme (you can implement actual logic later)
        alert(`Theme saved: ${selectedTheme}`);
    });

    element.appendChild(themeSelect);
    element.appendChild(saveButton);
    return element;
};

export default Settings;


// const Settings = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Settings</h1>`;

//     // Add some example settings options
//     const themeSelect = document.createElement('select');
//     const lightOption = document.createElement('option');
//     lightOption.value = 'light';
//     lightOption.textContent = 'Light Theme';
//     const darkOption = document.createElement('option');
//     darkOption.value = 'dark';
//     darkOption.textContent = 'Dark Theme';

//     themeSelect.appendChild(lightOption);
//     themeSelect.appendChild(darkOption);

//     const saveButton = Button('Save Settings', () => {
//         const selectedTheme = themeSelect.value;
//         // Save the selected theme (you can implement actual logic later)
//         alert(`Theme saved: ${selectedTheme}`);
//     });

//     element.appendChild(themeSelect);
//     element.appendChild(saveButton);
//     return element;
// };

// export default Settings;
// const Settings = () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>Settings</h1>`;
//     // Add any settings options or forms here
//     return element;
// };

// export default Settings;
