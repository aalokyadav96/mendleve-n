const SearchResults = (query) => {
    const element = document.createElement('div');
    element.innerHTML = `<h1>Search Results for "${query}"</h1>`;

    // Here you would fetch or filter the relevant data based on the query
    // For now, let's just simulate it with some static data

    const results = [
        { id: 1, title: 'Example Result 1' },
        { id: 2, title: 'Example Result 2' },
        { id: 3, title: 'Example Result 3' },
    ];

    const filteredResults = results.filter(result => result.title.toLowerCase().includes(query.toLowerCase()));

    if (filteredResults.length === 0) {
        element.innerHTML += `<p>No results found.</p>`;
    } else {
        filteredResults.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<p>${result.title}</p>`;
            element.appendChild(resultItem);
        });
    }

    return element;
};

export default SearchResults;


// import { SearchBar } from '../components/SearchBar.js';

// const SearchResults = () => {
//     const element = document.createElement('div');
//     const user = getUser();

//     element.innerHTML = `<h1>Dashboard</h1>`;
//     element.innerHTML += user ? `<p>Welcome, ${user.name}!</p>` : `<p>Please log in.</p>`;

//     const searchBar = SearchBar((query) => {
//         console.log(`Searching for: ${query}`);
//         // Implement search logic here, e.g., filter displayed items
//     });

//     element.appendChild(searchBar);
//     return element;
// };

// export default SearchResults;
