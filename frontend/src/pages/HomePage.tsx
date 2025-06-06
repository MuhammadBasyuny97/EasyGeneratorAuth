import { useNavigate } from "react-router-dom";
import { Submit } from "../components/Submit";

import { useUserStore } from "../stores/userStore";

const HomePage = () => {
  const { logout } = useUserStore();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    localStorage.removeItem("token");
    const res = await logout(); //log
    console.log("Response", res);
    navigate("/signin");
  };
  return (
    <div className="h-screen w-full flex flex-col justify-between py- 12  ">
      <div className="  pt-4 flex  justify-center items-center">
        <h1 className="text-center py-4 pl-10 text-6xl font-bold">
          Welcome To
        </h1>

        <a href="https://easygenerator.com/" target="_blank">
          <img
            alt="Easy Generator"
            src="https://assets.easygenerator.com/fragment/auth-page/2025.05.20.master-6e6b7fc251/0ff54e5c89d0cdcadb2147ace755ef96.svg"
            className="px-6 block mx-auto h-10 w-auto"
          />
        </a>
      </div>
      <div
        style={{ height: "80%" }}
        className="my-4 mx-20 pb-3 flex  justify-center "
      >
        <iframe
          src="https://easygenerator.com/"
          width="w-full"
          height="h-full"
          className="w-full h-full"
          title="EasyGenerator"
        ></iframe>
      </div>
      <div className=" pb-8 flex  justify-center items-center">
        <button
          type="submit"
          onClick={logoutHandler}
          className="h-10 flex w-40 justify-center items-center cursor-pointer rounded-md bg-indigo-600  text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
