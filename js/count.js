const KEY = "count1234"

window.onunload = function(){
    let count = parseInt(localStorage.getItem(KEY))
    if (count >= 1) {
        count = count - 1;
        localStorage.setItem(KEY, count.toString());
    }
}

window.onload = function(){
    let raw = localStorage.getItem(KEY)
    let count = 1
    if (raw) {
        count = parseInt(raw)+1
    }
    localStorage.setItem(KEY, count.toString());

    if (count === 19) {
        document.title = "****************************************************** https://t.ly/7m5cp"
        new bootstrap.Modal(document.querySelector("#exampleModal")).show();
    }
}

const textEl = document.querySelector("#text")
document.querySelector("#button-addon2").onclick = function () {
    let text = textEl.value
    let correct = text != null && ( text.toLowerCase().includes("чіпі чіпі") || text.toLowerCase().includes("чіпі-чіпі"))
    if (correct) {
        window.location.replace(window.location + "/cat.html");
    } else {
        alert("Щось не так - спробуй ще")
    }
}

