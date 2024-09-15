document
  .getElementById("loginForm")
  ?.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "admin.html";
      } else {
        alert("Login xato: token yo'q");
      }
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      alert("Login amalga oshmadi, qaytadan urinib ko'ring.");
    }
  });

document
  .getElementById("registerForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Ro'yxatdan o'tish muvaffaqiyatli!");
  });
