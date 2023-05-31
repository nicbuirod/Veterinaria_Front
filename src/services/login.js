export const loginAPI = async (body) => {
  try {
    const req = await fetch(
      "https://vetapp-backend-production.up.railway.app/person/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await req.json();

    return Promise.resolve(data);
  } catch (error) {
    console.log("error login", error);
    return Promise.resolve(error);
  }
};
