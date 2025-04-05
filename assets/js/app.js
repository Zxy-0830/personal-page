'use strict';

import{select, onEvent} from'./utilit.js';

const header = select('navbar');

onEvent('scroll', window, () =>{
    if (window.scrollY > 30) {
        header.classList.add('bg-dark');
    } else {
        header.classList.remove('bg-dark');
    }
});
