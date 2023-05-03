import './style.css'
import { CatService } from './services/cat-service'


CatService.getFacts().then(data => {
    console.log(data)
    displayData(data);
});


function displayData(data) {
    const list = document.getElementById('fact-list');
    for (const factObj of data) {
        list.innerHTML += `<li>${factObj.fact}</li>`;
    }
    
}