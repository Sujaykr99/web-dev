addBtn.onclick = () => {
  const text = taskInput.value;
  const type = taskType.value;

  const li = document.createElement("li");
  li.innerHTML = `
    ${text}
    <button class="done">✔</button>
    <button class="delete">✖</button>
  `;

  if (type === "daily") dailyList.appendChild(li);
  if (type === "monthly") monthlyList.appendChild(li);
  if (type === "yearly") yearlyList.appendChild(li);

  taskInput.value = "";
};
li.querySelector(".done").onclick = () => {
  li.classList.toggle("completed");
};

li.querySelector(".delete").onclick = () => {
  li.remove();
};
