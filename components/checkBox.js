"use client";
import { useState } from "react";

export default function CheckBox() {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const hobbies = ['Reading', 'Gaming', 'Cooking', 'Hiking', 'Painting'];

  function handleCheckboxChange(hobby) {
    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(selectedHobbies.filter((selected) => selected !== hobby));
    } else {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  }

  function handleShowAnswers() {
    setShowAnswers((prevAnswer) => !prevAnswer);
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md text-center">
      <h2 className="text-lg font-semibold mb-4 ">What are your hobbies?</h2>
      <form >
        {hobbies.map((hobby) => (
          <div key={hobby} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={hobby}
              name={hobby}
              onChange={() => handleCheckboxChange(hobby)}
              className="mr-2"
            />
            <label  className="select-none">{hobby}</label>
          </div>
        ))}
      </form>
      <button
        onClick={handleShowAnswers}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-4 "
      >
        Show My Hobbies
      </button>
      {showAnswers && (
        <div className="mt-4">
          <p className="font-semibold mb-2">Your selected hobbies are:</p>
          <ul>
            {selectedHobbies.map((hobby) => (
              <li key={hobby} className="list-none ml-4">{hobby}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
