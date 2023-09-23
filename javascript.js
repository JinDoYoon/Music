let playlist = document.querySelector('.playlist');
let searchbox = document.querySelector('.input');
let found;
let nfound;
let nselect;
let revert;

playlist.onclick = (e) => {
    if (playlist.classList.value === 'playlist off') {
        playlist.classList.remove('off')
        playlist.classList.add('on')
        playlist.innerHTML = 'View everything'

        nselect = document.querySelectorAll('.no');

        for (let i = 0; i < nselect.length; i++) {
            nselect[i].classList.add('hide');
        }
    }
    else {
        playlist.classList.add('off')
        playlist.classList.remove('on')
        playlist.innerHTML = 'View playlist'

        revert = document.querySelectorAll('.hide')
        for (let i = 0; i < revert.length; i++) {
            revert[i].classList.remove('hide');
        }
    }
}

searchbox.onchange = (e) => {
    nfound = document.querySelectorAll('.nfound');
    found = document.querySelector(`tbody > tr:nth-child(${Number(searchbox.value)})`);

    if (searchbox.value !== '') {
        found.classList.remove('nfound')
        found.classList.add('yfound')

        for (let i = 0; i < nfound.length; i++) {
            nfound[i].classList.add('hide');
        }
        found.classList.remove('hide')
    }
    else if (searchbox.value === '') {
        for (let i = 0; i < nfound.length; i++) {
            nfound[i].classList.remove('hide');
        }

        document.querySelector('.yfound').classList.add('nfound')
        document.querySelector('.yfound').classList.remove('yfound')
    }
}