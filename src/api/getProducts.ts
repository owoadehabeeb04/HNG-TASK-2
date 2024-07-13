const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export const getProducts = async () => {
  try {
    const response = await fetch(
      `api/products?organization_id=8d8859bc53b749139eaf62129b17e56f&reverse_sort=false&page=2&size=10&Appid=EM7DS527TZM9PC4&Apikey=${publicKey}`,
      {
        method: "GET",
      }
    );

    console.log({ response });
  } catch (error) {
    console.log({ error });
  }
};
