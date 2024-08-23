// Import the library first
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

// Initialize the Freecurrencyapi object with the correct API key
const freecurrencyapi = new Freecurrencyapi('fca_live_LYe60XGbMnqRbcE7Ixp719nHjHjFSR7WZm2OO4xk');

// Make the API call
freecurrencyapi.latest({
    base_currency: 'USD',
    currencies: 'INR'
}).then(response => {
    console.log(response);
}).catch(error => {
    console.error('Error:', error);
});
