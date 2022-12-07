import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import BigLogoSvg from "../../assets/svg/BigLogoSvg";
import start1 from "../../assets/image/start1.png";
import start2 from "../../assets/image/start2.png";
import start3 from "../../assets/image/start3.png";
import start4 from "../../assets/image/start4.png";
import start5 from "../../assets/image/start5.png";
import GoogleLogin from "../../assets/image/icons8-구글-로고-48.png";
import {
  Header,
  Logo,
  Main,
  Nav,
  Section1,
  Section1Btns,
  Section1Img,
  Section1Text,
  Section2,
  Section2Img,
  Section2Item,
  Section2Text,
  Section3,
  Section3First,
  Section3Second,
  Wrapper,
} from "./styles";

const Start = () => {
  const [isTop, setIsTop] = useState(true);

  const onScrollFn = useCallback(() => {
    if (window.scrollY > 60) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScrollFn);
    return () => window.removeEventListener("scroll", onScrollFn);
  }, [onScrollFn]);

  return (
    <Wrapper>
      <Header as="header" isTop={isTop}>
        <Logo>
          <BigLogoSvg />
        </Logo>
        <Nav>
          <span>문의하기</span>
          <span>로그인하기</span>
          <button>Status 무료 가입</button>
        </Nav>
      </Header>
      <Main as="main">
        <Section1 as="section">
          <Section1Text>
            <h2>나와 팀을 알아가는</h2>
            <h2>워크 스페이스</h2>
            <p>일을 잘하는 것만큼 함께하는 팀을 알아가는 것도 중요하죠.</p>
            <strong>
              스테이터스로 팀원의 일정과 상태를 체크하며 서로를 알아가세요.
            </strong>
            <Section1Btns>
              <button>Status 무료 가입</button>
              <button>
                <span>
                  <img src={GoogleLogin} alt="구글" />
                </span>
                Google로 가입
              </button>
            </Section1Btns>
          </Section1Text>
          <Section1Img>
            <img src={start1} alt="start1" />
          </Section1Img>
        </Section1>
        <Section2 as="section">
          <Section2Item>
            <Section2Img>
              <img src={start2} alt="start2" />
            </Section2Img>
            <Section2Text>
              <h3>“왜 자리에 안 계시지?”</h3>
              <h3>팀의 실시간 일정과 상태를</h3>
              <h3>항상 체크하세요.</h3>
              <p>
                팀의 일정을 한 눈에 모아보고, 요약해서 볼 수 <br />
                있습니다. 나의 일정과 현재 상태 역시 손쉽게
                <br />
                알릴 수 있어요.
              </p>
            </Section2Text>
          </Section2Item>
          <Section2Item>
            <Section2Img>
              <img src={start3} alt="start3" />
            </Section2Img>

            <Section2Text>
              <h3>팀 게시판을 통해 서로를 알아가세요.</h3>
              <p>
                팀원과 크고 작은 이야기들을 나눠볼까요?
                <br />
                피크닉 일정을 잡을 수도 있고
                <br />
                중요한 미팅 약속을 잡을 수도 있어요.
                <br />
                중요한 이야기는 공지사항에 저장해요.
              </p>
            </Section2Text>
          </Section2Item>
          <Section2Item>
            <Section2Img>
              <img
                src={start4}
                alt="start4"
                style={{
                  borderRadius: "15px",
                  paddingLeft: "20px",
                }}
              />
            </Section2Img>

            <Section2Text>
              <h3>”민지님과는 어떻게 일해야 할까?”</h3>
              <p>서로를 알고, 팀을 조직하고 조율하세요.</p>
            </Section2Text>
          </Section2Item>
          <Section2Item>
            <Section2Img>
              <img src={start5} alt="start5" />
            </Section2Img>

            <Section2Text>
              <h3>오늘 우리 팀의 컨디션은?</h3>
              <p>
                나의 하루 컨디션을 기록하고 오늘 하루 우리
                <br />
                팀의 전체 컨디션도 확인해요.
              </p>
            </Section2Text>
          </Section2Item>
        </Section2>
        <Section3 as="section">
          <Section3First>
            <BigLogoSvg />
            <h2>오늘 바로 팀과 Status를 사용해 보세요.</h2>
            <p>Get to know your team better.</p>
            <button>Status 무료 가입</button>
          </Section3First>
          <Section3Second>
            <BigLogoSvg />
            <ul>
              <strong>제품</strong>
              <li>개요</li>
              <li>스토리</li>
              <li>연락처</li>
              <li>팀 정보</li>
              <li>도움말 센터</li>
            </ul>
          </Section3Second>
        </Section3>
      </Main>
    </Wrapper>
  );
};

export default Start;

// padding 0 10w;
