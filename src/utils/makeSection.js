import dayjs from "dayjs";

export default function makeSection(chatList) {
  const sections = {};
  chatList.forEach((chat) => {
    // "2022-12-02T15:49:43.122Z"를 2022-12-02로 바꿔줌
    const monthDate = dayjs(chat.createdAt).format("YYYY년 MM월 DD일");
    // sections 객체에 2022-12-02라는 키값이 존재한다면 push 아니면 키를 생성하고 값을 지정
    if (Array.isArray(sections[monthDate])) {
      sections[monthDate].push(chat);
    } else {
      sections[monthDate] = [chat];
    }
  });
  return sections;
}
