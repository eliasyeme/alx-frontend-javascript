export default function getResponseFromAPI() {
  const res = true;
  return new Promise((resolve, reject) => {
    if (res) {
      resolve();
    } else {
      reject();
    }
  });
}

