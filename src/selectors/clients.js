export default (clients, {text, sortBy}) => {
    return clients.filter((client) => {
        const textMatch = client.fullname.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    }).sort((a, b) => {
        if (sortBy === 'dateDescending') {
            return a.visitDate < b.visitDate ? 1 : -1;
        }
        if (sortBy === 'dateAscending') {
            return a.visitDate > b.visitDate ? 1 : -1;
        }        
        if (sortBy === 'priceDescending') {
            return a.price < b.price ? 1 : -1;
        }
        if (sortBy === 'priceAscending') {
            return a.price > b.price ? 1 : -1;
        }       
        return(a,b); 
    });
};
