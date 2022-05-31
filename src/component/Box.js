import React from "react";

const Box = (props) => {
  console.log("rop>", props);
  return (
    <div className="box">
      <h1>{props.title}</h1>
      {/* props.item 가드값 : 리액트는 다이나믹한 ui를 그려줘야 한다 그래서 리액트 컴포넌트 props는 맨처음 값이 셋팅이 안되어있을 경우를 대비해 가드값을 넣어준다.*/}
      <img src={props.item && props.item.img} className="item-img" />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;
