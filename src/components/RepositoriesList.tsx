import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchBookRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchBookRepositories(term);
  };
  return (
    <div className="form-container" id="search">
      <h2 className="inputheader">Search for title</h2>
      <div className="form">
        <form onSubmit={onSubmit}>
          <input value={term} onChange={(e) => setTerm(e.target.value)} />
          <button className="button">Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Searching...</h3>}
        <div className="list">
          {!error &&
            !loading &&
            data.map((book) => (
              <div key={book.title}>
                <ul className="ul-title">
                  <li className="title">
                    {book.title}
                    <ul>
                      <li className="author">{book.author}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RepositoriesList;
