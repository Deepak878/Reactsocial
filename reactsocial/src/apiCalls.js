import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    console.log("yeha xam");
    console.log(userCredential);
    // const res = await axios.post(
    //   "localhost:8800/api/auth/login",
    //   userCredential
    // );

    await axios
      .post("http://localhost:8800/api/auth/login", userCredential)
      .then((response) => {
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
        console.log("response aaula ta khoi ", response);
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE", payload: error });
        console.log("error dekhi", error);
      });
    //console.log(res);
  } catch (error) {
    console.log(error);
  }
};
