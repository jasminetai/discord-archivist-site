function FaqEntry(props: { children: React.ReactNode }) {
  return <section className="mb-4">{props.children}</section>;
}

function Question(props: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <h2>Q:</h2>
      <p className="font-bold">{props.children}</p>
    </div>
  );
}

function Answer(props: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <h2>A:</h2>
      <div>{props.children}</div>
    </div>
  );
}

FaqEntry.Question = Question;
FaqEntry.Answer = Answer;

export default FaqEntry;
