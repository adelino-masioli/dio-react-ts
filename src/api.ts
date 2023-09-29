const account = {
  email: "email@example.com",
  password: "123456",
  name: "Your name",
  balance: 2000.0,
  id: "1",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(account);
  }, 3000);
});
