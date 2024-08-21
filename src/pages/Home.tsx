import QA from "../components/QA";

export default function Home() {
  return (
    <div className="w3-container w3-cyan">
      <h2>Let's see how much you know about our school</h2>
      <QA Question="How many kids are in our school?" CorrectAnswer="500" />
      <QA
        Question="In what year was our school founded?"
        CorrectAnswer="2005"
      />
    </div>
  );
}
