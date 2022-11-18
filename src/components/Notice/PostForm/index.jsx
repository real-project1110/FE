import React from "react";
import BoldSvg from "../../../assets/svg/BoldSvg";
import TextUnderlineSvg from "../../../assets/svg/TextUnderlineSvg";
import TiltSvg from "../../../assets/svg/TiltSvg";
import PostButtonSvg from "../../../assets/svg/PostButtonSvg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import {
  Form,
  PostTextArea,
  Property,
  FontProperty,
  SubmitBtn,
  Vector,
  Tilt,
  UnderLine,
  PostButton,
  Posting,
} from "./styles";
import { Title } from "../NoticeCarousel/styles";

function PostForm() {
  // 클릭시 textarea 속성 변경 해줘야함
  const textBold = () => {};
  const textTilt = () => {};
  const textUnderLine = () => {};
  return (
    <Form>
      <Title>새 글 작성</Title>
      <PostTextArea placeholder="공유하고 싶은 소식이 있나요? 사소한 이야기라도 좋아요 :)" />
      <Property>
        <FontProperty>
          <div onClick={textBold}>
            <BoldSvg />
          </div>
          <Tilt onClick={textTilt}>
            <TiltSvg />
          </Tilt>
          <UnderLine onClick={textUnderLine}>
            <TextUnderlineSvg />
          </UnderLine>
          <Vector>|</Vector>
          <FontAwesomeIcon
            style={{ width: "15px", height: "14px" }}
            icon={faArrowUpFromBracket}
          />
          <FontAwesomeIcon
            style={{ width: "15px", height: "14px", marginLeft: "10px" }}
            icon={faFaceSmile}
          />
        </FontProperty>
        <SubmitBtn>
          <Posting>게시</Posting>
          <PostButton>
            <PostButtonSvg />
          </PostButton>
        </SubmitBtn>
      </Property>
    </Form>
  );
}

export default PostForm;
