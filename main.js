const onSubmit = () => {
    let input = document.querySelector("#input").value;
    let items = input.split(",");
    const out = document.querySelector("#output");
    out.innerHTML = ""
    items.forEach((item, i) => {
        let text = `<li class="list-item">${item}</item>`;
        out.innerHTML += text
    });

    let arr = document.querySelectorAll(".list-item")
    arr.forEach(item => item.addEventListener("click", () => item.classList.toggle("active")))
};

$("#submit").on("click", onSubmit);

