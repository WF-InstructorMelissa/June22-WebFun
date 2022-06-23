var t_b = [0, 1, 2];
var spans = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3")
];

function like(id) {
    t_b[id]++;
    spans[id].innerHTML = t_b[id] + " like(s)";
}