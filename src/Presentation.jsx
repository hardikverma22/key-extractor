import { VscSymbolKeyword } from "react-icons/vsc";

const Presentation = () => {
  return (
    <>
      <VscSymbolKeyword className="text-5xl" />
      <h1 className="text-3xl text-center font-poppins font-semibold text tracking-wide">
        AI Keyword Extractor
      </h1>

      <p className="text-lg text-center">
        Paste in the text below and we will extract the keywords for you
      </p>
    </>
  );
};

export default Presentation;
