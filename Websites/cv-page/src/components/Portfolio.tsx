import styled from "styled-components";
import ReactPlayer from "react-player";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Button from "./Button";

const StyledPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;
`;

const PortfolioIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15rem 0 5rem;
  line-height: 1.5;

  h2 {
    font-size: 4rem;
    margin-bottom: 0.5rem;
    padding-top: 1.5rem;
  }

  div {
    background-color: var(--border-color);
    width: 20rem;
    height: 4px;
    margin-bottom: 2rem;
    border-radius: 10rem;
  }

  p {
    font-size: 2rem;
    width: 55%;
    text-align: center;
  }
`;

const OddProject = styled.div`
  display: flex;
  align-items: center;
  margin: 15rem 5rem;
  position: relative;
`;

const StyledPlayerOdd = styled.div`
  margin-left: 10rem;
`;

const ProjectInfoOdd = styled.div`
  padding: 2rem;
  font-size: 1.6rem;
  border-radius: 2rem;
  position: absolute;
  left: 50%;
  margin-right: 10rem;
  flex-direction: row-reverse;

  h3 {
    margin: 2rem;
    text-align: end;
    font-size: 2.5rem;
  }

  p {
    background-color: var(--bg-color-main);
    padding: 2rem;
    border-radius: 2rem;

    a {
      color: var(--tx-color2);
    }
  }
`;

const StyledLinksOdd = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem;
  font-size: 2.5rem;

  a {
    margin: 0 1rem;
    color: var(--tx-color1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const EvenProject = styled.div`
  margin: 15rem 5rem;
  position: relative;
`;

const StyledPlayerEven = styled.div`
  margin-right: 10rem;
  display: flex;
  justify-content: flex-end;
`;

const ProjectInfoEven = styled.div`
  padding: 2rem;
  font-size: 1.6rem;
  border-radius: 2rem;
  position: absolute;
  right: 50%;
  margin-left: 10rem;

  h3 {
    margin: 2rem;
    text-align: start;
    font-size: 2.5rem;
  }

  p {
    background-color: var(--bg-color-main);
    padding: 2rem;
    border-radius: 2rem;

    a {
      color: var(--tx-color2);
    }
  }
`;

const StyledLinksEven = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 2rem;
  font-size: 2.5rem;

  a {
    margin: 0 1rem;
    color: var(--tx-color1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function Portfolio() {
  const [play1, setPlay1] = useState<boolean>(false);
  const [play2, setPlay2] = useState<boolean>(false);

  return (
    <StyledPortfolio>
      <PortfolioIntroduction>
        <h2>Portfolio</h2>
        <div></div>
        <p>
          Here you will find some of my projects that I created with each
          project containing short description
        </p>
      </PortfolioIntroduction>
      <OddProject>
        <StyledPlayerOdd
          onMouseEnter={() => setPlay1(true)}
          onMouseLeave={() => setPlay1(false)}
        >
          <ReactPlayer
            url="./video/wildOasis.mp4"
            playing={play1}
            width="55%"
            height="55%"
          />
        </StyledPlayerOdd>
        <ProjectInfoOdd style={{ left: play1 ? "60%" : "50%" }}>
          <h3>Wild Oasis</h3>
          <p>
            This is a full-stack hotel management application, with the backend
            powered by Supabase. Designed to streamline the intricate tasks of
            hotel operations, this platform facilitates real-time room tracking,
            swift guest reservations, check-in and check-out processes, and
            generates insightful statistics about room occupancy and guest
            behavior.
            <br />
            <br />
            <a>Read more...</a>
          </p>
          <StyledLinksOdd>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FiExternalLink />
            </a>
          </StyledLinksOdd>
        </ProjectInfoOdd>
      </OddProject>
      <EvenProject>
        <ProjectInfoEven style={{ right: play2 ? "60%" : "50%" }}>
          <h3>Wild Oasis</h3>
          <p>
            This is a full-stack hotel management application, with the backend
            powered by Supabase. Designed to streamline the intricate tasks of
            hotel operations, this platform facilitates real-time room tracking,
            swift guest reservations, check-in and check-out processes, and
            generates insightful statistics about room occupancy and guest
            behavior.
            <br />
            <br />
            <a>Read more...</a>
          </p>
          <StyledLinksEven>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FiExternalLink />
            </a>
          </StyledLinksEven>
        </ProjectInfoEven>
        <StyledPlayerEven
          onMouseEnter={() => setPlay2(true)}
          onMouseLeave={() => setPlay2(false)}
        >
          <ReactPlayer
            url="./video/wildOasis.mp4"
            playing={play2}
            width="55%"
            height="55%"
          />
        </StyledPlayerEven>
      </EvenProject>
      <OddProject>
        <StyledPlayerOdd
          onMouseEnter={() => setPlay1(true)}
          onMouseLeave={() => setPlay1(false)}
        >
          <ReactPlayer
            url="./video/wildOasis.mp4"
            playing={play1}
            width="55%"
            height="55%"
          />
        </StyledPlayerOdd>
        <ProjectInfoOdd style={{ left: play1 ? "60%" : "50%" }}>
          <h3>Wild Oasis</h3>
          <p>
            This is a full-stack hotel management application, with the backend
            powered by Supabase. Designed to streamline the intricate tasks of
            hotel operations, this platform facilitates real-time room tracking,
            swift guest reservations, check-in and check-out processes, and
            generates insightful statistics about room occupancy and guest
            behavior.
            <br />
            <br />
            <a>Read more...</a>
          </p>
          <StyledLinksOdd>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FiExternalLink />
            </a>
          </StyledLinksOdd>
        </ProjectInfoOdd>
      </OddProject>
      <EvenProject>
        <ProjectInfoEven style={{ right: play2 ? "60%" : "50%" }}>
          <h3>Wild Oasis</h3>
          <p>
            This is a full-stack hotel management application, with the backend
            powered by Supabase. Designed to streamline the intricate tasks of
            hotel operations, this platform facilitates real-time room tracking,
            swift guest reservations, check-in and check-out processes, and
            generates insightful statistics about room occupancy and guest
            behavior.
            <br />
            <br />
            <a>Read more...</a>
          </p>
          <StyledLinksEven>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FiExternalLink />
            </a>
          </StyledLinksEven>
        </ProjectInfoEven>
        <StyledPlayerEven
          onMouseEnter={() => setPlay2(true)}
          onMouseLeave={() => setPlay2(false)}
        >
          <ReactPlayer
            url="./video/wildOasis.mp4"
            playing={play2}
            width="55%"
            height="55%"
          />
        </StyledPlayerEven>
      </EvenProject>
      <Button>Show all Projects</Button>
    </StyledPortfolio>
  );
}

export default Portfolio;
