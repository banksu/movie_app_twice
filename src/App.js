import React from "react";

function Food({ fav, add, papapa }) {
  return (
    <div>
      <h1>{fav}</h1>
      <h3>{add}</h3>
      <h3>{papapa}</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      <Food fav="3434" add="adasdasd" papapa="popopop" />
    </div>
  );
}

export default App;
