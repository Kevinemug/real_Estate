import axios from "axios";

export const deletePost = (id) => {
  const url = `https://servapi-2191.onrender.com/api/estates/delete/${id}`;
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${YOUR_AUTH_TOKEN}`,
  //   },
  // };
  axios
    .delete(url)
    .then((response) => {
      console.log(response);
      window.location.reload();
    })
    .catch((error) => console.error(error));

  console.log(url);
};
