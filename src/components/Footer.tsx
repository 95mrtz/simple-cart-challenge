import {IoLogoTwitter} from "react-icons/io5";

const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col justify-center items-center p-4 border-t-2 border-gray-500">
      <h2 className="text-2xl text-center text-gray-500 dark:text-slate-200 ">
        Encontrá la consigna de este ejercicio y otros más{" "}
        <a
          className="text-gray-700 font-bold dark:text-blue-300"
          href="https://github.com/goncy/interview-challenges/tree/main/simple-cart"
          rel="noreferrer"
          target={"_blank"}
        >
          acá
        </a>
      </h2>
      <div className="my-3 flex flex-row">
        <h3 className="text-gray-500 dark:text-slate-200">
          {" "}
          Desarrollado por{" "}
          <a
            className="text-gray-700 font-bold dark:text-blue-300 underline underline-offset-2"
            href="https://hctmanuelortiz-portfolio.vercel.app/"
            rel="noreferrer"
            target={"_blank"}
          >
            Manuel Ortiz
          </a>
        </h3>
        <a href="https://twitter.com/hctmanuelortiz"
            rel="noreferrer"
            target={"_blank"}><IoLogoTwitter className="mx-5 text-2xl text-gray-500 dark:text-blue-200" /></a>
      </div>
    </footer>
  );
};

export default Footer;
