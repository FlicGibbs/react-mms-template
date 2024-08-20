import { useState } from "react";

interface propsQA {
  Question: string;
  CorrectAnswer: string;
}

export default function QA(props: propsQA) {
  const [userAnswer, setUserAnswer] = useState("");

  const [status, setStatus] = useState("");

  async function handleSubmit() {
    if (userAnswer === "") {
      setStatus("");
    } else if (userAnswer.toLowerCase() === props.CorrectAnswer.toLowerCase()) {
      setStatus("Correct!");
    } else {
      setStatus("Nope sorry! Try again.");
    }
  }

  return (
    <>
      <p>{props.Question}</p>
      <textarea
        value={userAnswer}
        onChange={(e) => {
          setUserAnswer(e.target.value);
        }}
      />
      <br />
      <button onClick={() => handleSubmit()}>Check</button>
      <p>{status}</p>
    </>
  );
}
