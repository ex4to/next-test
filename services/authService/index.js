class authService {
  async login(nickname, pass) {
    return await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nickname, pass }),
    }).then((res) => res.json());
  }
}

export default new authService();
