change();
function change() {
    countword = localStorage.getItem('word')
    counttime = localStorage.getItem('time')
    document.getElementById("brresult1").innerText = Math.ceil(countword / (counttime / 60));
    document.getElementById("brresult2").innerText = localStorage.getItem('mistake');
    document.getElementById("brresult3").innerText = localStorage.getItem('time');
    document.getElementById("brresult4").innerText = localStorage.getItem('type');
    var root = document.documentElement;
    root.style.setProperty('--mainbgcolor',localStorage.getItem('mainbgcolor'));

}