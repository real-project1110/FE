import React from "react";
import SpaceLikeSvg from "../../../assets/svg/SpaceLikeSvg";
import {
  Wrapper,
  AllPost,
  PostImg,
  Post,
  PostContent,
  ContentBox,
  PostTitle,
  PostInfoWrap,
  PostInfo,
  PostWriter,
  Vector,
  PostDate,
  PostLike,
  LikeCount,
  Notice,
} from "./styles";
import Scrollbars from "react-custom-scrollbars-2";
import { useQuery } from "react-query";
import { readNoticePosts } from "../../../apis/postApi";

function NoticePosts() {
  const { isLoading, isError, data, error, refetch } = useQuery(["noticePosts", 1], () => readNoticePosts(1), {
    refetchOnWindowFocus: false,
    retry: 1,
    onSuccess: (data) => {
      // 데이터 state
    },
    onError: (e) => {
      console.log(e.message);
    },
  });

  return (
    <Wrapper>
      <Notice>공지사항</Notice>
      <AllPost>
        {/* map 돌려야함 */}
        <Scrollbars autoHide>
          <Post>
            <PostImg
              src="https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjJfMjkz/MDAxNTUzMjI5MTMwNTYx.70x953dgjcDe85MV-srqs5gNYV4aeHMdNjdynpnD_UYg.wSF_eNL1m7Ty6dEVO4zpMol4kaIJd3FV3nfbnp63tAIg.JPEG.bdrsquare/SK%EC%97%94%EC%B9%B4_%EB%B0%94%ED%85%8C%EC%9D%B4%EB%B8%94_%EC%98%A4%ED%94%88_%ED%9A%8C%EC%9D%98%EA%B3%B5%EA%B0%84.jpg?type=w800"
              alt="회의실"
            />
            <ContentBox>
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
            </ContentBox>
          </Post>
          <Post>
            <PostImg
              src="https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjJfMjkz/MDAxNTUzMjI5MTMwNTYx.70x953dgjcDe85MV-srqs5gNYV4aeHMdNjdynpnD_UYg.wSF_eNL1m7Ty6dEVO4zpMol4kaIJd3FV3nfbnp63tAIg.JPEG.bdrsquare/SK%EC%97%94%EC%B9%B4_%EB%B0%94%ED%85%8C%EC%9D%B4%EB%B8%94_%EC%98%A4%ED%94%88_%ED%9A%8C%EC%9D%98%EA%B3%B5%EA%B0%84.jpg?type=w800"
              alt="회의실"
            />
            <ContentBox>
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
            </ContentBox>
          </Post>
          <Post>
            <PostImg
              src="https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjJfMjkz/MDAxNTUzMjI5MTMwNTYx.70x953dgjcDe85MV-srqs5gNYV4aeHMdNjdynpnD_UYg.wSF_eNL1m7Ty6dEVO4zpMol4kaIJd3FV3nfbnp63tAIg.JPEG.bdrsquare/SK%EC%97%94%EC%B9%B4_%EB%B0%94%ED%85%8C%EC%9D%B4%EB%B8%94_%EC%98%A4%ED%94%88_%ED%9A%8C%EC%9D%98%EA%B3%B5%EA%B0%84.jpg?type=w800"
              alt="회의실"
            />
            <ContentBox>
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
            </ContentBox>
          </Post>
        </Scrollbars>
      </AllPost>
    </Wrapper>
  );
}

export default NoticePosts;
