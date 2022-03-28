import React from "react";

const CharacterList = ({ characters }) => {
  return (
    <div>
      <div>
        {characters.map((item, index) => (
          <div key={index} >
            <div>
              <img src={item.image} alt="character" />
              <div>
                <h5>{item.name}</h5>
                <hr />
                <p>Species: {item.species}</p>
                <p>Location: {item.location.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;