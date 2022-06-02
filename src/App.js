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

// 사진과 이름을 저장할 수 있는 객체 아이템 생성
// 유저가 클릭하면 해당 객체의 아이템을 꺼내온다.
const choices = {
  rock: {
    name: "Rock",
    img: "https://previews.123rf.com/images/lemonadeserenade/lemonadeserenade1606/lemonadeserenade160600120/60264283-kraft-und-st%C3%A4rke-eine-hand-gezeichnete-vektor-illustration-eines-erhobener-faust-isoliert-auf-einem-.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://is2-ssl.mzstatic.com/image/thumb/Purple/v4/49/6f/5e/496f5ecb-3d3f-0801-dff3-080b0ec9df0b/source/512x512bb.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://blog.kakaocdn.net/dn/cD4Lwz/btqXOaxai6P/eiDV58H4USpQLNOE1NT7L1/img.png",
  },
};

function App() {
  // 유저가 아이템을 선택하는 로직 버튼을 클릭하면? onClick play

  const play = (userChoice) => {
    console.log("t선택?", userChoice);
    setUserSelect(choices[userChoice]);
    // 유자가 선택할때 컴퓨터도 랜덤하게 선택하는 함수
    let ComputerChoice = randomChoice();
    SetComputerSelect(ComputerChoice);
    // 판단하는 함수 한테 ->유저가 선택한 값 , 컴터가 선택한값 전달
    setResult(judgement(choices[userChoice], ComputerChoice));
  };
  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  const randomChoice = () => {
    // 랜덤번호와 choice 를 연결해주는 배열Keys 함수를 이용 한다.
    // Object.keys(choices)를 배열화 시켜준다.
    // keys : 객체의 키값만 뽑아서 배열로 만들어주는 함수.
    let itemArray = Object.keys(choices);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    console.log("fin???", final);
    return choices[final];
  };

  // 가위바위보 변경 UI를 그려주기 위해서는 state 사용
  const [userSelect, setUserSelect] = useState(null);
  // 컴퓨터 초이스 start
  const [ComputerSelect, SetComputerSelect] = useState(null);
  // 승패를 보여주는 state
  const [result, setResult] = useState("");

  return (
    <div>
      <div className="main">
        <Box title="User" item={userSelect} result={result} />
        <Box title="Computer" item={ComputerSelect} result={result} />
      </div>
      <div className="main-button">
        {/* play() 함수 실행시 유저가 무엇을 선택 했는지 알아야 하므로 매개변수를 받을 인수를 만들어준다. */}
        {/* 리액트는 play() 함수 실행시킬시에 ui를 바로 실행 해줘 버린다 그래서 함수를 통쨰로 넣지말고 콜백함수처럼 넣어준다. */}
        <button onClick={() => play("scissors")}>
          <i class="fa-solid fa-hand-scissors"></i>
        </button>
        <button onClick={() => play("rock")}>
          <i class="fa-solid fa-hand-back-fist"></i>
        </button>
        <button onClick={() => play("paper")}>
          <i class="fa-solid fa-hand"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
