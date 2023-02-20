export const updatePost = async (id, { data }) => {
  console.log(id);
  const response = await fetch(
    `https://servapi-2191.onrender.com/api/estates/update/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return await response.json();
  //   catch (error) {
  //     return console.error(error);
  //   }
};
