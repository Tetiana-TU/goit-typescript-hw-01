type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  console.log("Оновлюємо користувача:", initialValues);
  // Оновлення користувача
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
