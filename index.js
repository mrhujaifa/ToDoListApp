const addBtn = document.getElementById("addBtn");
let input = document.getElementById("input");
addBtn.addEventListener("click", () => {
  if (input.value === "") {
    Swal.fire({
      title: "Please Add a Task and try again!",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  } else {
    let listContainer = document.getElementById("list-container");
    let div = document.createElement("div");

    div.innerHTML = `
  <div class="flex items-center justify-between mx-60 border p-3 border-black rounded-md">
            
        <div class="flex gap-3 items-center text-xl">
            <div onclick='listContainer(this)'>
                <img class="w-6" src="images/unchecked.png" alt="" />
                <img class="w-6 hidden" src="images/checked.png" alt="" />
            </div>
            <span>${input.value}</span>
        </div>
        <div onclick='removeTask(this)' class="text-xl">
            <i class=" text-red-600 fa-solid fa-circle-xmark"></i>
          </div>
        </div>`;

    listContainer.appendChild(div);
    input.value = "";
  }
});
function listContainer(div) {
  div.children[0].classList.toggle('hidden')
  div.children[1].classList.toggle('hidden')
  let taskValue = div.parentNode.querySelector('span')
  

  taskValue.classList.toggle("line-through");
}

function removeTask(crossBtn){
    crossBtn.parentNode.remove()
    
}

