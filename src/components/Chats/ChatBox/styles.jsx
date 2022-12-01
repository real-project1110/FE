import styled from "styled-components";

export const ChatContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: ${(props) => (props.isMe ? "46px 1fr" : "46px 1fr")};
  margin-bottom: 0.7rem;
  justify-items: ${(props) => (props.isMe ? "flex-end" : "start")};
  padding: 0 1rem;
`;

export const UserImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  object-fit: cover;
  justify-self: center;
  cursor: pointer;
`;

export const Comment = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isMe ? "flex-end" : "start")};
  margin-left: 0.6em;
  padding-top: 0.5rem;
  p {
    // 이거 고정값 수정해야함
    padding: 10px;
    line-height: 1.25;
    max-width:540px;
    background-color: ${(props) =>
      props.isMe ? props.theme.color.green : props.theme.color.white};
    border-radius: 5px;
    color: ${(props) => (props.isMe ? "white" : props.theme.color.black)};

  }
  span,strong{
    margin-left: ${(props) => (props.isMe ? "0" : "0.3rem")};
    margin-right: ${(props) => (props.isMe ? "0.3rem" : "0rem")};
    font-size:0.8rem;
    align-self:flex-end;
    padding-bottom:0.2rem;
    color:${(props) => props.theme.color.gray};
  }
  
  div{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    strong{
      color:${(props) => props.theme.color.green};
      font-weight: 500;
    }
  }
`;
