export const Tooltip = (text, tooltipText) => {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = text;

    const tooltipContent = document.createElement('span');
    tooltipContent.className = 'tooltip-text';
    tooltipContent.innerText = tooltipText;
    
    tooltip.appendChild(tooltipContent);

    return tooltip;
};
