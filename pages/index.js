import styled from 'styled-components';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

import db from '../db.json';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45PX;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        <Widget>
          <Widget.Header>
            <h1>Um Quiz ainda não inventado</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>

        <Widget>

          <Widget.Content>
            <h1>Quiz da galera</h1>
            <p>uh! uh!</p>
          </Widget.Content>

        </Widget>

        <Footer />
        </QuizContainer>

      <GitHubCorner projectUrl=""/>
    </QuizBackground>
  );
}
