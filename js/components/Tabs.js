export const Tabs = (tabs, onTabChange) => {
    const tabContainer = document.createElement('div');
    tabContainer.className = 'tabs';

    tabs.forEach(tab => {
        const tabButton = document.createElement('button');
        tabButton.innerText = tab.label;
        tabButton.onclick = () => onTabChange(tab.id);
        tabContainer.appendChild(tabButton);
    });

    return tabContainer;
};
