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
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map((title) => <div key={title}>{title}</div>)}
    </div>
  );
};

export default RepositoriesList;
