// Global app controller
// 2952c5405ee286946b61857b7d009709
// https://www.food2fork.com/api/search

import axios from 'axios';

async function getResult(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '2952c5405ee286946b61857b7d009709';
    try {
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        console.log(error);
    }

}

getResult('pizza');