export const getPetByIdApi = async (token, idpet) => {
  try {
    const request = await fetch(
      `https://vetapp-backend-production.up.railway.app/pet/${idpet}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await request.json();
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
  }
};
