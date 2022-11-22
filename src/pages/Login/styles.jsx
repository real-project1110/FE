import styled from "styled-components";

export const Logo = styled.div`
  padding-top: 22%;
`;

export const LoginBox = styled.div`
  width: 802px;
  margin: auto;
`;

export const LogoBox = styled.div`
  width: 172px;
  height: 58px;
  margin: auto;
`;

export const Info = styled.div`
  text-align: center;
`;

export const BigMent = styled.p`
  height: 31px;
  margin-bottom: 58px;
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
`;

export const SmallMent = styled.p`
  margin-bottom: 15px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

export const Ment = styled.div`
  margin-top: 15px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

export const LoginButton = styled.div`
  width: 330px;
  height: 43px;
  margin: 120px auto auto auto;
  background-color: ${(props) => props.theme.color.green};

  border: none;
  border-radius: 5px;

  text-align: center;
  line-height: 43px;
  font-weight: 700;
  color: #ffffff;

  :hover {
    background-color: #35ad70;
    box-shadow: 2px 2px 5px ${(props) => props.theme.color.gray};
    cursor: pointer;
    opacity: 50;
  }
`;

export const EmailLogin = styled.div`
  width: 100%;
  height: 43px;
  text-align: center;
  margin: 10% auto 5% -2.3%;

  font-weight: 600;
  line-height: 43px;

  cursor: pointer;
`;

export const EasyJoin = styled.span`
  margin-left: 43%;
`;
