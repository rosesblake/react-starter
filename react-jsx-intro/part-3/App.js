const App = () => (
  <div>
    <Person name="blake" age={29} hobbies={["eating", "music", "pickleball"]} />
    <Person
      name="ariel"
      age={31}
      hobbies={["hiking", "music", "league of legends"]}
    />
    <Person name="sam" age={17} hobbies={["talking", "walking", "chalking"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
