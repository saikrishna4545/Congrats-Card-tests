const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="container">
      <img
        className="image"
        scr="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="name">Kiran V</h1>
      <p className="paragraph">
        Vishnu Institute of Computer Education and Technology,Bhimavaram
      </p>
      <img
        className="image"
        scr="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
