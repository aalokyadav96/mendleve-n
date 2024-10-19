export const Pagination = (totalPages, currentPage, onPageChange) => {
    const pagination = document.createElement('div');
    pagination.className = 'pagination';

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.disabled = i === currentPage;
        pageButton.onclick = () => onPageChange(i);
        pagination.appendChild(pageButton);
    }

    return pagination;
};
