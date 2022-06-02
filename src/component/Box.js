import React from "react";

export const Box = (props) => {
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    result = props.result === "win" ? "lose" : "win";
  } else {
    // 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }
  if (props.title === "Computer") {
    console.log("computer", result);
  }
  console.log("props??", props);
  return (
    <div className={`box ${result}`}>
      <h1 className="title-name">{props.title}</h1>
      <img src={props.item && props.item.img} className="item-img" />
      <h2 className="sub-name">{result}</h2>
    </div>
  );
};

export default Box;
