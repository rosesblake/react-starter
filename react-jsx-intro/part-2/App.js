const App = () => (
  <div>
    <Tweet
      tweet={{
        username: "blake1",
        name: "blake",
        date: "10/06/24",
        message: "hello world, this is my tweet",
      }}
    />
    <Tweet
      tweet={{
        username: "blake2",
        name: "yeehaw",
        date: "07/12/21",
        message: "test tweet, 2",
      }}
    />
    <Tweet
      tweet={{
        username: "blake3",
        name: "tacos",
        date: "05/01/22",
        message: "test tweet 3",
      }}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
