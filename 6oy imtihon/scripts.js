function checkToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Siz login qilishingiz kerak!");
    window.location.href = "login.html";
  }
}

checkToken();

let dataArray = [];

document.getElementById("adminForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;

  dataArray.push({ input1, input2, input3 });

  renderData();
});

function renderData() {
  const outputList = document.getElementById("outputList");
  outputList.innerHTML = "";

  dataArray.map((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Element ${index + 1}: ${item.input1}, ${
      item.input2
    }, ${item.input3}`;
    outputList.appendChild(listItem);
  });
}

document.getElementById("logoutButton")?.addEventListener("click", function () {
  localStorage.removeItem("token");
  window.location.href = "login.html";
});
