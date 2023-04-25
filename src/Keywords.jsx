import { FiCopy } from "react-icons/fi";
const Keywords = ({ keywords, handleCopyToClipboard }) => {
  return (
    <div
      className="bg-purple-300
                            py-16
                            px-5
                            text-purple-950
                            font-bold
                            flex flex-wrap gap-2
                            rounded-md
                            relative"
    >
      <div>
        <FiCopy
          onClick={(e) => handleCopyToClipboard(e, keywords.join(" | "))}
          className="absolute top-5 right-5
                          text-3xl text-purple-950
                          hover:scale-105 hover:text-purple-800 duration-200
                          peer"
        />
        <span
          className="hidden peer-hover:flex justify-center items-center
                            absolute top-4 -right-[2.75rem]
                            text-white bg-black
                            rounded-md p-2"
        >
          Copy
        </span>
      </div>
      {keywords?.map((keyword, index) => (
        <div
          key={`${index}-${keyword}`}
          className="bg-purple-800 text-white 
                    p-2 
                    rounded-md
                    hover:scale-105 duration-300
                    flex gap-5 justify-center items-center group
                    cursor-pointer"
          title="Click to copy"
          onClick={(e) => handleCopyToClipboard(e, keyword)}
        >
          <span>{keyword}</span>
          <FiCopy className="hidden group-hover:block" />
        </div>
      ))}
    </div>
  );
};

export default Keywords;
