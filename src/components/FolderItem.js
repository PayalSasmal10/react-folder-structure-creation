import { useState } from "react";
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";

export const FolderItem = ({ name, items, isDirectory }) => {
  const [hideData, setHideData] = useState(true);
  const showDataHandler = () => {
    console.log("hi");
    setHideData((prvHideData) => !prvHideData);
  };
  return (
    <div>
      {!isDirectory ? (
        <span>{name}</span>
      ) : (
        <div>
          <span onClick={showDataHandler}>
            {hideData ? (
              <BiSolidRightArrow size={"10px"} />
            ) : (
              <BiSolidDownArrow size={"10px"}/>
            )}
            {name}
          </span>
          {!hideData && (
            <div style={{ marginLeft: "20px" }}>
              {items.map((item) => (
                <FolderItem key={item.name} {...item} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
