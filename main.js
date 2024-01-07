document.getElementById("upper-case").addEventListener("click", function () {
    document.querySelector("textarea").value = document.querySelector("textarea").value.toUpperCase();
})

document.getElementById("lower-case").addEventListener("click", function () {
    document.querySelector("textarea").value = document.querySelector("textarea").value.toLowerCase();
})

document.getElementById("proper-case").addEventListener("click", function () {
    document.querySelector("textarea").value = document.querySelector("textarea").value.toLowerCase();

    let words2 = document.querySelector("textarea").value.split(" ");
    for (var i = 0; i < words2.length; i++) {
        words2[i] = words2[i].charAt(0).toUpperCase() + words2[i].slice(1);
    }
    let str2 = words2.join(" ");
    document.querySelector("textarea").value = str2;
})

document.getElementById("sentence-case").addEventListener("click", function () {
    document.querySelector("textarea").value = document.querySelector("textarea").value.toLowerCase();

    let sentences = document.querySelector("textarea").value.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
    }
    let str = sentences.join(". ");
    document.querySelector("textarea").value = str;
})