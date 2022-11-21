import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpaceLikeSvg from "../../../assets/svg/SpaceLikeSvg";
import {
  Title,
  Carousel,
  Slide,
  PostImg,
  Post,
  PostContent,
  PostTitle,
  PostInfoWrap,
  PostInfo,
  PostWriter,
  Vector,
  PostDate,
  PostLike,
  LikeCount,
} from "./styles";

function NoticeCarousel() {
  const settings = {
    arrows: false, // 화살표 표시
    dots: true, // 밑에 현재 페이지와 나머지 페이지 점으로 표시
    infinite: true, // 무한 반복
    speed: 500, // 넘기는 속도
    slidesToShow: 1, // 슬라이드에 보여지는 아이템 개수
    slidesToScroll: 1, // 슬라이드 넘기는 아이템 개수
    autoplay: true, // 자동 재생
    autoplaySpeed: 5000, // 자동 재생 속도
  };
  return (
    <>
      <Title>공지사항 1/4</Title>
      <Carousel>
        <Slider {...settings}>
          {/* map 돌려야함 */}
          <Slide>
            <PostImg
              src="https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjJfMjkz/MDAxNTUzMjI5MTMwNTYx.70x953dgjcDe85MV-srqs5gNYV4aeHMdNjdynpnD_UYg.wSF_eNL1m7Ty6dEVO4zpMol4kaIJd3FV3nfbnp63tAIg.JPEG.bdrsquare/SK%EC%97%94%EC%B9%B4_%EB%B0%94%ED%85%8C%EC%9D%B4%EB%B8%94_%EC%98%A4%ED%94%88_%ED%9A%8C%EC%9D%98%EA%B3%B5%EA%B0%84.jpg?type=w800"
              alt="회의실"
            />
            <Post>
              <PostTitle>목요일 UX/UI 회의장소</PostTitle>
              <PostContent>
                계절이 지나가는 하늘에는가을로 가득 차 있습니다.나는 아무 걱정도 없이가을 속의 별들을 다 헤일 듯합니다...가슴 속에 하나 둘 새겨지는 별을이제 다
                못 헤는 것은쉬이 아침이 오는 까닭이요,내일 밤이 남은 까닭이요,아직 나의 청춘이 다하지 않은 까닭입니다.별 하나에 추억과별 하나에 사랑과별 하나에
                쓸쓸함과별 하나에 동경과별 하나에.....
              </PostContent>
              <PostInfoWrap>
                <PostInfo>
                  <PostWriter>작성자</PostWriter>
                  <Vector>|</Vector>
                  <PostDate>2022.11.18</PostDate>
                </PostInfo>
                <PostLike>
                  <SpaceLikeSvg />
                  <LikeCount>5</LikeCount>
                </PostLike>
              </PostInfoWrap>
            </Post>
          </Slide>
          <Slide>
            <PostImg
              src="https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjJfMjkz/MDAxNTUzMjI5MTMwNTYx.70x953dgjcDe85MV-srqs5gNYV4aeHMdNjdynpnD_UYg.wSF_eNL1m7Ty6dEVO4zpMol4kaIJd3FV3nfbnp63tAIg.JPEG.bdrsquare/SK%EC%97%94%EC%B9%B4_%EB%B0%94%ED%85%8C%EC%9D%B4%EB%B8%94_%EC%98%A4%ED%94%88_%ED%9A%8C%EC%9D%98%EA%B3%B5%EA%B0%84.jpg?type=w800"
              alt="회의실"
            />
            <Post>
              <PostTitle>목요일 UX/UI 회의장소</PostTitle>
              <PostContent>
                계절이 지나가는 하늘에는가을로 가득 차 있습니다.나는 아무 걱정도 없이가을 속의 별들을 다 헤일 듯합니다...가슴 속에 하나 둘 새겨지는 별을이제 다
                못 헤는 것은쉬이 아침이 오는 까닭이요,내일 밤이 남은 까닭이요,아직 나의 청춘이 다하지 않은 까닭입니다.별 하나에 추억과별 하나에 사랑과별 하나에
                쓸쓸함과별 하나에 동경과별 하나에.....
              </PostContent>
              <PostInfoWrap>
                <PostInfo>
                  <PostWriter>작성자</PostWriter>
                  <Vector>|</Vector>
                  <PostDate>2022.11.18</PostDate>
                </PostInfo>
                <PostLike>
                  <SpaceLikeSvg />
                  <LikeCount>5</LikeCount>
                </PostLike>
              </PostInfoWrap>
            </Post>
          </Slide>
          <Slide>
            <PostImg
              src="https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjJfMjkz/MDAxNTUzMjI5MTMwNTYx.70x953dgjcDe85MV-srqs5gNYV4aeHMdNjdynpnD_UYg.wSF_eNL1m7Ty6dEVO4zpMol4kaIJd3FV3nfbnp63tAIg.JPEG.bdrsquare/SK%EC%97%94%EC%B9%B4_%EB%B0%94%ED%85%8C%EC%9D%B4%EB%B8%94_%EC%98%A4%ED%94%88_%ED%9A%8C%EC%9D%98%EA%B3%B5%EA%B0%84.jpg?type=w800"
              alt="회의실"
            />
            <Post>
              <PostTitle>목요일 UX/UI 회의장소</PostTitle>
              <PostContent>
                계절이 지나가는 하늘에는가을로 가득 차 있습니다.나는 아무 걱정도 없이가을 속의 별들을 다 헤일 듯합니다...가슴 속에 하나 둘 새겨지는 별을이제 다
                못 헤는 것은쉬이 아침이 오는 까닭이요,내일 밤이 남은 까닭이요,아직 나의 청춘이 다하지 않은 까닭입니다.별 하나에 추억과별 하나에 사랑과별 하나에
                쓸쓸함과별 하나에 동경과별 하나에.....
              </PostContent>
              <PostInfoWrap>
                <PostInfo>
                  <PostWriter>작성자</PostWriter>
                  <Vector>|</Vector>
                  <PostDate>2022.11.18</PostDate>
                </PostInfo>
                <PostLike>
                  <SpaceLikeSvg />
                  <LikeCount>5</LikeCount>
                </PostLike>
              </PostInfoWrap>
            </Post>
          </Slide>
          <Slide>
            <PostImg
              src="https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjJfMjkz/MDAxNTUzMjI5MTMwNTYx.70x953dgjcDe85MV-srqs5gNYV4aeHMdNjdynpnD_UYg.wSF_eNL1m7Ty6dEVO4zpMol4kaIJd3FV3nfbnp63tAIg.JPEG.bdrsquare/SK%EC%97%94%EC%B9%B4_%EB%B0%94%ED%85%8C%EC%9D%B4%EB%B8%94_%EC%98%A4%ED%94%88_%ED%9A%8C%EC%9D%98%EA%B3%B5%EA%B0%84.jpg?type=w800"
              alt="회의실"
            />
            <Post>
              <PostTitle>목요일 UX/UI 회의장소</PostTitle>
              <PostContent>
                계절이 지나가는 하늘에는가을로 가득 차 있습니다.나는 아무 걱정도 없이가을 속의 별들을 다 헤일 듯합니다...가슴 속에 하나 둘 새겨지는 별을이제 다
                못 헤는 것은쉬이 아침이 오는 까닭이요,내일 밤이 남은 까닭이요,아직 나의 청춘이 다하지 않은 까닭입니다.별 하나에 추억과별 하나에 사랑과별 하나에
                쓸쓸함과별 하나에 동경과별 하나에.....
              </PostContent>
              <PostInfoWrap>
                <PostInfo>
                  <PostWriter>작성자</PostWriter>
                  <Vector>|</Vector>
                  <PostDate>2022.11.18</PostDate>
                </PostInfo>
                <PostLike>
                  <SpaceLikeSvg />
                  <LikeCount>5</LikeCount>
                </PostLike>
              </PostInfoWrap>
            </Post>
          </Slide>
        </Slider>
      </Carousel>
    </>
  );
}

export default NoticeCarousel;
