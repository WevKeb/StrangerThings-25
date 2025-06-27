// https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT/

export const fetchMe = async (token) => {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT/users/me",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT/users/register`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      }
    );
    const result = await response.json();
    const token = result.data.token;

    return token;
  } catch (error) {
    console.error(error);
  }
};
