import MagicEightBallHome from "../../assets/magic-eight-ball-home.png";
import MagicEightBallGame from "../../assets/magic-eight-ball-game.png";

import "../MyProject/eightBall.css";

function EightBall() {
  return (
    <>
      <div className="divEightBall">
        <div>
          <h3>The Magic EightBall</h3>
        </div>
        <img
          className="pics"
          src={MagicEightBallHome}
          alt="Magic eight ball accueil"
        />
        <img
          className="pics"
          src={MagicEightBallGame}
          alt="Magic eight ball jeu"
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fugiat
          explicabo amet, qui perferendis aperiam, officia ut illo ea placeat
          vel quos animi labore voluptatem cum? Omnis accusamus dicta
          dignissimos?
        </p>
      </div>
    </>
  );
}

export default EightBall;
