export const FollowButton = (userId, onFollow) => {
    const button = document.createElement('button');
    button.innerText = 'Follow';
    button.onclick = () => {
        onFollow(userId);
        button.innerText = 'Following'; // Change text on click
    };
    return button;
};
