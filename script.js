const input = document.querySelector("#input-box");
const list = document.querySelector("#list-container");
const rem = document.querySelector("#rem");
const add = document.querySelector("#add")

input.addEventListener(
    "keyup",
    function (e) {
        if (e.key == "Enter") {
            addto(e.target.value)
            e.target.value = "";
        }
    }
)

function addto(data) {
    list.innerHTML = list.innerHTML + ` <li>
  ${data}
  <i class="fa-xmark" onClick="remove(this)">X</i>
</li>`
}

function remove(cross){
    cross.parentNode.remove()
}