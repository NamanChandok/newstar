
function updateProgress() {
    const {scrollTop, scrollHeight} = document.querySelector('main');
    const scrollPercent = scrollTop/(scrollHeight - window.innerHeight) * 100 + '%';
    document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent)
    if (scrollTop > 700) {
        document.querySelector('#navbar').style.setProperty('background-color', '#027373')
    } else {
        document.querySelector('#navbar').style.setProperty('background-color', 'transparent')
    }
}

document.querySelector('main').addEventListener('scroll', updateProgress);