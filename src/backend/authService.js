export async function login(email, password) {
    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  
    if (!res.ok) throw new Error("Login falhou");
  
    const data = await res.json();
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  
    return data.user;
  }
  
  export function getUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  
  export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }