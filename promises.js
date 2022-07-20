/*
 * A Promise is a proxy for a value not necessarily known when the promise is created. 
 * It allows you to associate handlers with an asynchronous action's eventual success 
 * value or failure reason. This lets asynchronous methods return values like synchronous 
 * methods: instead of immediately returning the final value, the asynchronous method 
 * returns a promise to supply the value at some point in the future.
 * 
 * A Promise is in one of these states:
 *
 * pending: initial state, neither fulfilled nor rejected.
 * fulfilled: meaning that the operation was completed successfully.
 * rejected: meaning that the operation failed.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 * Chart:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png
 */

// Mock a fetch request
const mockFetch = function(url, accept) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let apiResponse = {
                colors: ["blue", "red", "green"]
            }
    
            if (accept) {
                resolve(apiResponse)
            } else {
                reject('There was an error in your request.')
            }
        }, 5000)
    })
}

let data = [];

mockFetch('https://pokeapi.co/api/v2/pokemon/ditto', true)
    .then((apiResponse) => {
        data = apiResponse;
        console.log(data)
    })
    .catch((err) => console.log(err));

console.log(data);
