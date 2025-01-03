const gdeYa = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude: lat, longitude: long } = position.coords;
      resolve([lat, long]);
    },
    (error) => {
      reject(error);
    }
  );
});

gdeYa
  .then(async (data) => {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${data[0]}&longitude=${data[1]}$localityLanguage=ru`
    );
    const { city } = await res.json();
    return city;
  })
  .then((city) => {
    const div = document.createElement("div");
    div.innerHTML = city;
    div.style.color = "white";
    div.style.fontSize = "60px";
    document.body.appendChild(div);
  })
  .catch((error) => console.error(error));

const gdeYa2 = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      resolve([position.coords.latitude, position.coords.longitude]);
    },
    (error) => reject(error)
  );
});

gdeYa2
  .then((data) => console.log(`Широта: ${data[0]}, Долгота: ${data[1]}`))
  .catch((error) => console.error(error));
