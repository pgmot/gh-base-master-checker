

let timer = 0;
document.addEventListener('DOMNodeInserted', function () {
    if (timer) return;
    timer = setTimeout(function () {
        timer = 0;
        


    }, 1000);
}, false);