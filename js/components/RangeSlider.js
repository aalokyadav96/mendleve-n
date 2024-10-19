export const RangeSlider = (min, max, onChange) => {
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = min;
    slider.max = max;

    slider.addEventListener('input', () => {
        onChange(slider.value);
    });

    return slider;
};
