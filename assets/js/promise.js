function nonton(tiketHabis) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tiketHabis) {
        resolve("Tiket Terjual");
      } else {
        reject("Tiket habis");
      }
    }, 1000);
  });
}
nonton(false)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
