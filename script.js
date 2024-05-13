document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".btn1").addEventListener("click", add);
});

function add() {
  let input1 = document.querySelector(".input1").value;
  let input2 = document.querySelector(".input2").value;

  let divC = document.createElement("div");
  divC.classList.add("div1");

  document.body.appendChild(divC);

  let c1 = document.createElement("p");
  c1.classList.add("input1");
  let c2 = document.createElement("p");
  c2.classList.add("input2");
  let c3 = document.createElement("button");
  c3.classList.add("btn2");

  c1.innerHTML = input1;
  c2.innerHTML = input2;
  c3.innerHTML = "Delete";

  divC.appendChild(c1);
  divC.appendChild(c2);
  divC.appendChild(c3);

  c3.addEventListener("click", function () {
    divC.remove();
  });
}
