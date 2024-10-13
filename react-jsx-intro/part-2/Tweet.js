// style with css class? not sure what method I'm supposed to do, but ill just do basic JSX className
const Tweet = (p) => {
  const items = [];
  for (const key in p.tweet) {
    items.push(
      <li className="tweet-line">
        {key}: {p.tweet[key]}
      </li>
    );
  }
  return (
    <div>
      <ul className="tweet-ul">{items}</ul>
    </div>
  );
};
