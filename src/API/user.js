export const fetchUser = (username) => {
  return fetch(
    `https://topaz-deciduous-piper.glitch.me/translations?username=${username}`
  ).then((response) => response.json());
};

export const createUser = (username) => {
  return fetch(`https://topaz-deciduous-piper.glitch.me/translations`, {
    method: "POST",
    headers: {
      mode: "cors",
      "X-API-Key": process.env.REACT_APP_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      translations: [],
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Could not create new user");
    }
    return response.json();
  });
};

export const updateTranslations = (user) => {
  return fetch(`https://topaz-deciduous-piper.glitch.me/translations/${user.id}`, {
    method: "PATCH", // NB: Set method to PATCH
    headers: {
      "X-API-Key": process.env.REACT_APP_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Provide new translations to add to user with id 1
      translations: [...user.translations],
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not update translations history");
      }
      return response.json();
    })
    .then((updatedUser) => {
      // updatedUser is the user with the Patched data
    })
    .catch((error) => {});
};

export const foundUser = (username, users) => {
  if (users.length > 0) {
    return users.find((user) => user.username === username);
  }
};
