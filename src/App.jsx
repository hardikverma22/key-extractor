import { useState } from "react";
import axios from "axios";
import "./App.css";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Keywords from "./Keywords";
import Presentation from "./Presentation";

import { apiErrorMessage, wrongInputMessage } from "./constant";
import { dangerToast, successCopiedToast, warningToast } from "./customToast";

const App = () => {
  const [text, setText] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleExtractKeywords = async () => {
    setKeywords([]);
    if (text == "") {
      warningToast();
    } else {
      setIsLoading(true);

      axios
        .post(import.meta.env.VITE_AWS_API_URL, {
          inputText: text,
        })
        .then((response) => {
          const data = response.data;

          if (data.statusCode == 200) {
            const keywordArray = data.body;

            if (keywordArray && keywordArray.length == 0) {
              dangerToast(wrongInputMessage);
            } else {
              setKeywords(keywordArray);
            }
            setText("");
            setIsLoading(false);
          } else {
            setIsLoading(false);
            dangerToast(apiErrorMessage);
          }
        })
        .catch((e) => {
          setIsLoading(false);
          dangerToast(apiErrorMessage);
        });
    }
  };

  const handleCopyToClipboard = (e, content) => {
    e.stopPropagation();
    navigator.clipboard.writeText(content).then(() => {
      successCopiedToast();
    });
  };

  return (
    <>
      <section
        className="w-full 
                md:min-h-screen h-screen
                bg-gradient-to-b from-purple-500 to-purple-900 
                flex flex-col justify-center items-center lg:gap-10 gap-5
                text-white
                sm:px-20 px-10 py-10"
      >
        <Presentation />

        <div
          className="w-full 
                  lg:w-[50%]
                  flex flex-col gap-5"
        >
          {keywords && keywords.length == 0 && (
            <>
              <textarea
                rows={10}
                cols={10}
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={isLoading}
                className="w-full 
                bg-gray-200 
                outline-none 
                border-none 
                rounded-md
                resize-none
                text-black
                p-5
                focus:outline-double
                focus:outline-purple-300
                disabled:bg-gray-400"
              />

              <button
                className="w-full
                bg-purple-500
                text-lg
                h-12
                rounded-lg
                font-medium
                tracking-wider
                hover:border-2
                hover:border-white
                flex justify-center items-center gap-5
                disabled:bg-gray-600"
                onClick={handleExtractKeywords}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <AiOutlineLoading3Quarters className="animate-spin" />
                    <span>Extracting...</span>
                  </>
                ) : (
                  <span>Extract Keywords</span>
                )}
              </button>
            </>
          )}

          {keywords && keywords.length != 0 && (
            <>
              <Keywords
                handleCopyToClipboard={handleCopyToClipboard}
                keywords={keywords}
              />

              <button
                className="w-full
                bg-purple-500
                text-lg
                h-12
                rounded-lg
                font-medium
                tracking-wider
                hover:border-2
                hover:border-white
                flex justify-center items-center gap-5"
                onClick={() => setKeywords([])}
              >
                Extract Again
              </button>
            </>
          )}
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={15000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
