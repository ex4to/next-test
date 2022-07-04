import { useState } from "react";
import authService from "@/services/authService";
import { useRouter } from "next/router";
import Spinner from "@/public/Spinner.svg";

const RForm = () => {
  const [nickname, setNickname] = useState("");
  const [pass, setPass] = useState("");
  const [authError, setAuthError] = useState(false);
  const [loader, setLoader] = useState(null);
  const router = useRouter();

  const authHandler = async (e) => {
    e.preventDefault();

    setLoader(
      <Spinner className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
    );
    const answer = await authService.login(nickname, pass);
    answer.foo === true ? router.push("/cab") : setAuthError(true);
    setLoader(null);
  };

  const inputClassNames = () => {
    return (
      "outline-none p-2 rounded bg-gray-50 focus:bg-gray-100 shadow-inner text-lg " +
      (authError ? "bg-red-50 border border-red-200" : "")
    );
  };

  return (
    <div className="px-6 py-4 rounded-md bg-white shadow-inner">
      <h2 className="text-2xl md:text-3xl pb-2 border-b text-center select-none font-light">
        Welcome to the Next.js
      </h2>
      <form className="flex flex-col gap-4 py-2">
        <input
          className={inputClassNames()}
          type={"text"}
          placeholder="Введите никнейм"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <input
          type={"password"}
          className={inputClassNames()}
          placeholder="Введите пароль"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          type="submit"
          className="rounded text-xl border border-gray-200 hover:shadow-inner hover:border-gray-100 py-2"
          onClick={(e) => authHandler(e)}
        >
          {loader || <p>Войти</p>}
        </button>
        {authError && (
          <p className="text-lg text-red-300 text-center p-2">
            Ошибка входа. Введены неверные логин или пароль
          </p>
        )}
      </form>
    </div>
  );
};

export default RForm;
