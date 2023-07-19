
function updateProgress() {
    const {scrollTop, scrollHeight} = document.querySelector('main');
    const scrollPercent = scrollTop/(scrollHeight - window.innerHeight) * 100 + '%';
    document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent)
    if (scrollTop > 300) {
        document.querySelector('nav').style.color = '#fff';
        document.querySelector('#navbar').style.backgroundColor = '#1b1b87';
    } else {
        document.querySelector('nav').style.color = '#0D0D0D';
        document.querySelector('#navbar').style.backgroundColor = 'transparent';
    }
}

document.querySelector('main').addEventListener('scroll', updateProgress);