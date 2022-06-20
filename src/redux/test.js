import { baseUrl } from '../shared/baseUrl';


fetch (baseUrl + 'dishes')
    .then (response => response.json())
    .then (response => console.log (response))