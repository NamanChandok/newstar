
function updateProgress() {
    const {scrollTop, scrollHeight} = document.querySelector('main');
    const scrollPercent = scrollTop/(scrollHeight - window.innerHeight) * 100 + '%';
    document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent)
}

document.querySelector('main').addEventListener('scroll', updateProgress);