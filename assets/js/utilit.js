'use strict';

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
function select(selector, parent = document) {
    return parent.getElementById(selector);
}

export {select, onEvent};