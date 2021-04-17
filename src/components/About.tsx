import books from "./pics/Books-Website.png";

const About = () => {
  return (
    <div className="about" id="top-page">
      <div>
        <h1 className="description1">Don't know what to read next?</h1>
        <h3 className="description2">
          Search for your new book and choose amongst New Your Times
          Bestsellers.
        </h3>
      </div>
      <div>
        <img src={books} alt="Three books" className="books"></img>
      </div>
    </div>
  );
};

export default About;
