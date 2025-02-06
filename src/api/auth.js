const cohort = "2211-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${cohort}`;

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    });
    const {data:{token}} = await response.json();
 
    // console.log(token,'this is token in reguser');
    return token;
  } catch (error) {
    console.error(error);
  }
}