const getAccessToken = () => {
  return `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.NHVaYe26MbtOYhSKkoKYdFVomg4i8ZJd8_-RU8VNbftc4TSMb4bXP3l3YlNWACwyXPGffz5aXHc6lty1Y2t4SWRqGteragsVdZufDn5BlnJl9pdR_kdVFUsra2rWKEofkZeIC4yWytE58sMIihvo9H1ScmmVwBcQP6XETqYd0aSHp1gOa9RdUPDvoXQ5oqygTqVtxaDr6wUFKrKItgBMzWIdNZ6y7O9E0DhEPTbE9rfBo6KTFsHAZnMg4k68CDp2woYIaXbmYTWcvbzIuHO7_37GT79XdIwkm95QJ7hYC9RiwrV7mesbY4PAahERJawntho0my942XheVLmGwLMBkQ`;
}

const users = [
  {
    userName: 'Robson',
    userLogin: 'robson.durval@gmail.com',
    userPassword: 'Abc@12345',
    accessToken: getAccessToken(),
  },
];

export async function login({ userLogin, userPassword }) {
  const user = users.find(
    (user) => user.userLogin === userLogin && user.userPassword === userPassword
  );

  if (!user) throw new Error();

  delete user.userPassword;

  return {
    user: user,
  };
}

export async function getUserByAccessToken(accessToken) {
  const user = users.find((u) => u.accessToken === accessToken);

  if (!user) throw new Error();

  delete user.userPassword;

  return {
    user: user,
  };
}
