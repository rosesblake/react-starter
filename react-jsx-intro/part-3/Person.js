const Person = (p) => {
  let msg;
  if (p.age >= 18) {
    msg = "please go vote!";
  } else {
    msg = "you must be 18";
  }
  return (
    <div>
      <h1>Learn some information about {p.name.slice(0, 6)}</h1>
      <h3>age: {p.age}</h3>
      <h3>{msg}</h3>
      <h3>Hobbies</h3>
      <ul>
        {p.hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
};
