import React from 'react';
import cities from "../lib/city.list.json";

export default function SearchBox() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    
    let matchingCities = [];
    if (value.length > 3) {
      for (let city of cities) {
        if (matchingCities.length >= 5) {
          break;
        }

        const match = city.name.toLowerCase().startWith(value.toLowerCase());

        if (match) {
          matchingCities.push(city);
        }
      }
    }
    return setResults(matchingCities);
  };

  return (
    <div className="search">
      <input type="text" value={query} onChange={onChange} />

      {query.length > 3 && (
        <ul>
          {results.length > 0 ? (
            <li>result</li>
          ) : (
            <li className="search__no-results">No results found</li>
          )}
        </ul>
      )}
    </div>
  )
}
