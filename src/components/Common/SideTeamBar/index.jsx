import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { readGroups } from "../../../apis/groupApi";
import PlusSvg from "../../../assets/svg/PlusSvg";
import { groupListAtom } from "../../../recoil/groupAtoms";
import NavItem from "./NavItem";
import { GroupList, PlusBtn, Wrapper } from "./styles";

const SideTeamBar = () => {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const setGroupList = useSetRecoilState(groupListAtom);

  const { data: groupList } = useQuery(["groupList"], readGroups, {
    staleTime: 10000,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  // groupList를 recoil에 저장
  useEffect(() => {
    if (groupList) {
      setGroupList(groupList);
    }
  }, [groupList, setGroupList]);

  // 만약 가입되지 않은 group에 접근할 시에 이전 페이지로 보내버리는 기능
  useEffect(() => {
    if (groupList && groupId) {
      const isExist = groupList
        .map((group) => group.groupId)
        .includes(+groupId);
      if (!isExist) return navigate(-1);
    }
  }, [groupId, groupList, navigate]);

  return (
    <Wrapper as="aside">
      <GroupList>
        {groupList?.map((group) => (
          <NavItem key={group?.groupId} group={group} />
        ))}
      </GroupList>
      <Link to="/main/write">
        <PlusBtn>
          <PlusSvg />
        </PlusBtn>
      </Link>
    </Wrapper>
  );
};

export default SideTeamBar;
