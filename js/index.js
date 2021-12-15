const btn = document.querySelector("#submit__btn");
const [input1, input2, input3] = document.querySelectorAll(".form-control");
btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (input1.value == "" || input2.value == "" || input3.value == "") {
        alert("Barcha inputlarni to'ldiring !");
    } else {
        const newTr = document.createElement("tr")
        newTr.innerHTML += `
              <th>${input1.value}</th>
              <th>${input2.value}</th>
              <th>${input3.value}</th>
          `
        document.querySelector("tbody").appendChild(newTr)
        input1.value = ""
        input2.value = ""
        input3.value = ""
    }
})