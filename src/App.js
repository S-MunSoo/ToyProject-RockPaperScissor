import "./App.css";
import Box from "./component/Box";
import { useState } from "react";

// 로드맵
// 1. 유저는 박스 두개를 볼 수 있다.(component 생성)
// 2. 박스에는 타이틀이 있고, 사진정보 , 결과 값이 들어간다
// 3. 가위바위보 버튼이 보인다.
// 4. 버튼을 누르면 클릭한 아이템이 유저눈에 보인다(useState 이용)
// 5. 컴퓨너틑 랜덤하게 선택이 된다.
// 6. 3, 4번의 결과를 가지고 누가 이겼는지 승패 결정한다
// 7 승패에 따라 박스테두리 색이 바뀐다(이기면:초록 , 지면:빨강 , 무승부:블랙)

// 사진과 이름을 저장할 수 있는 객체 생성
const choices = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://www.creativefabrica.com/wp-content/uploads/2020/02/06/1580976980/Scissors-black-580x386.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://m.media-amazon.com/images/I/61OorFhm6SL.jpg",
  },
};

function App() {
  // ui에 그리려기 위해서는 state를 만들어야 한다.
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  // 승패에 값을 보여주는 state
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choices[userChoice]);
    // 컴퓨터가 랜덤으로 값을 선택해주는 함수
    let ComputerChoice = randomChoice();
    setComputerSelect(ComputerChoice);
    // 승패를 판단 해주는 함수 judgement(유저가 선택값 , 컴터가 선택값)
    setResult(judgement(choices[userChoice], ComputerChoice));
  };
  const judgement = (user, computer) => {
    console.log("user??", user, "com?", computer);
    // user === computer 무승부 tie
    // user === rock , computer === scissor 유저가 이김
    // user === rock , computer === parer 유저가 짐
    // user === scissor , computer === paper 유저가 이김
    // user === scissor , computer === rock 유저가 짐
    // user === paper , computer === rock 유저가 이김
    // user === paper , computer === scissor 유저가 짐

    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Loss";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Loss";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Loss";
  };

  const randomChoice = () => {
    // 랜덤함수가 어떻게 choices 랑 연결이 될까? 아이템과 숫자를 연결할때는 배열을 이용한다.
    let itemArray = Object.keys(choices); // keys는 배열의 각 인데스를 키값으로 가지는 새로운 배열을 반환한다.
    //  Object.keys : 객체의 키값만 뽑아서 배열 함수로 만들어준다.
    console.log("itemAarrt??", itemArray);

    let randomItem = Math.floor(Math.random() * itemArray.length); // math.floor() 함수를 이용해 부여된 소수자리 랜덤숫자 앞자리만 가지고 온다
    console.log("randomValue", randomItem);
    let final = itemArray[randomItem];
    console.log("final??", final);
    return choices[final];
  };

  return (
    <div className="container">
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      {/* 무엇을 선택했는지 알려줘야 한다 가위?바위 보? 매개변수를 넣어준다 */}
      <div className="main-button">
        {/* {play() 는 함수} */}
        {/* 리액트에서 함수는 바로 실행이 되므로 콜백함수(() =>)를 이용해서 막아준다. */}
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
