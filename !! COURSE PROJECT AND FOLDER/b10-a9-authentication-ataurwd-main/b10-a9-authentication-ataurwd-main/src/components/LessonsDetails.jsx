import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const LessonsDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null); 
  const data = useLoaderData();
  const { id } = useParams();

  const [categoryLesson, setCategoryLesson] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      const filteredLessons = data.filter(
        (lesson) => lesson.lessonNumber === parseInt(id)
      );
      setCategoryLesson(filteredLessons);
    }
  }, [data, id]);

  function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "it-IT"; // Japanese
    window.speechSynthesis.speak(utterance);
  }

  const handleOpenModal = (wordData) => {
    setSelectedWord(wordData); 
    setOpenModal(true); 
  };

  const handleCloseModal = () => {
    setSelectedWord(null); 
    setOpenModal(false); 
  };

  return (
    <div className="lg:px-10">
      <div className="lg:my-10 flex justify-between items-center lg:px-6 md:px-5 px-1">
        <h1 className="text-3xl font-bold underline">Lesson {id}</h1>
        <Link to={"/learning"} className="px-3 py-1 bg-MainPrimary rounded-md">
          Back to Lesson
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {categoryLesson.map((data) => (
          <div
            onClick={() => pronounceWord(data.word)}
            key={data.id}
            className="border-2 m-5 p-5 space-y-4 cursor-pointer"
          >
            <h1>
              Word: <span className="font-bold">{data.word}</span>
            </h1>
            <p className="text-xl">Meaning: {data.meaning}</p>
            <p>Pronunciation: {data.pronunciation}</p>
            <p>Part of Speech: {data.part_of_speech}</p>
            <div className="">
              <div className="flex justify-start">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleOpenModal(data); 
                  }}
                  className="rounded-md border px-5 py-[6px] bg-MainBg text-white"
                >
                  When to Say
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openModal && selectedWord && (
        <div
          onClick={handleCloseModal}
          className="fixed z-[100] w-screen inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute max-w-md rounded-lg bg-white p-6 drop-shadow-lg dark:bg-zinc-900 dark:text-white"
          >
            <svg
              onClick={handleCloseModal}
              className="absolute right-3 top-3 w-6 cursor-pointer fill-zinc-600 dark:fill-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
            </svg>
            <div className="space-y-4">
              <h1>
                Word: <span className="font-bold">{selectedWord.word}</span>
              </h1>
              <p className="text-xl">
                <span className="font-bold">Meaning: </span>{" "}
                {selectedWord.meaning}
              </p>
              <p className="text-xl">
                <span className="font-bold">Way To Say: </span>
                {selectedWord.when_to_say}
              </p>
              <p className="text-xl">
                <span className="font-bold">Example: </span>{" "}
                {selectedWord.example}
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCloseModal}
                className="rounded-md border border-MainBg px-6 py-[6px] duration-150"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonsDetails;
