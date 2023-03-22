import React, { useMemo } from "react";

// Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop. 
// The FilteredList component should render only the items of the list whose age is greater than 18, 
// and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list.

function FillteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);
  return (
    <ul>
      {filteredList.map((item) => {
        return (
          <li key={item.id}>
            Habibi's name is {item.name} and he is {item.age} y.o.
            <br/ > 
            <br/ > 
          </li>
        );
      })}
    </ul>
  );
}

export default FillteredList;
