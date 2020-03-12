const list = $("#my-list");
const input = $("#i-wish");

input.on("keypress", function(e) {
    if (e.key === "Enter") {
        const text = input.val();
        list.append(`<li><b>${text}</b></li>`)
        input.val("")
    }
});
