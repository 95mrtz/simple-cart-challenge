const Footer = (): JSX.Element => {
  return (
    <footer className="p-4 text-2xl text-center text-gray-500 dark:text-slate-200 border-t-2 border-gray-500">
      Encontrá la consigna de este ejercicio y otros más{" "}
      <a
        className="text-gray-700 font-bold dark:text-blue-300"
        href="https://github.com/goncy/interview-challenges/tree/main/simple-cart"
        rel="noreferrer"
        target={"_blank"}
      >
        acá
      </a>
    </footer>
  );
};

export default Footer;
