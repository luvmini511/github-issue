import { IssueLabel } from '../IssueLabel';
import styled from '@emotion/styled';
import { IssueState, Label } from '../../../../types/issue';
import { formatBody } from './logics/formatBody';

type Props = {
  title: string;
  number: number;
  body: string;
  labels: Label[];
  comments_url: string;
  state: IssueState;
  comments: number;
};

export const ListCardBody = ({ number, state, title, body, comments, labels }: Props) => {
  return (
    <Container>
      <NumberAndState>
        #{number} / {state}
      </NumberAndState>
      <Title>{title}</Title>
      <Body>{formatBody(body)}</Body>
      <Comments>{comments} comments</Comments>
      <Labels>
        {labels.map(({ id, ...label }) => (
          <IssueLabel key={id} {...label} />
        ))}
      </Labels>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const NumberAndState = styled.p`
  font-size: 14px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 5px;
`;

const Body = styled.p`
  margin-bottom: 10px;
  color: #5a5a5a;
`;

const Labels = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

const Comments = styled.p`
  margin-bottom: 8px;
  font-weight: 600;
`;
