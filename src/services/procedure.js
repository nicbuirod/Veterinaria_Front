export const getProceduresApi = async (token, idhistory) => {
  try {
    const request = await fetch(
      `https://vetapp-backend-production.up.railway.app/procedure/history/${idhistory}`,
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
