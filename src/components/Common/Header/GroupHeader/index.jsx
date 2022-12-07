import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import BellSvg from "../../../../assets/svg/BellSvg";
import QuestionSvg from "../../../../assets/svg/QuestionSvg";
import {
  editProfileModalAtom,
  headerMenuAtom,
} from "../../../../recoil/modalAtoms";
import { groupUserAtom } from "../../../../recoil/userAtoms";
import { existCookie } from "../../../../utils/existCookie";
import { handleImgError } from "../../../../utils/handleImgError";
import AlertModal from "../../../Modals/AlertModal";
import ProfileEditModal from "../../../Modals/ProfileEditModal";
import HeaderMenu from "../HeaderMenu";
import { RightNav, Nav, Wrapper, FakeImg } from "./styles";
import { AnimatePresence } from "framer-motion";
import BigLogoSvg from "../../../../assets/svg/BigLogoSvg";
import { useQuery } from "react-query";
import { readInvites } from "../../../../apis/groupApi";

const GroupHeader = () => {
  const [headerMenu, setHeaderMenu] = useRecoilState(headerMenuAtom);
  const [editProfile, setEditProfile] = useRecoilState(editProfileModalAtom);
  const [headerAlert, setHeaderAlert] = useState(false);
  const { groupId } = useParams();
  const groupUser = useRecoilValue(groupUserAtom);
  const navigate = useNavigate();
  const { data: invites } = useQuery(["alerts"], readInvites, {
    staleTime: 3000,
    refetchOnWindowFocus: false,
    retry: 0,
  });

  // 토큰이 없다면 시작페이지로 이동
  useEffect(() => {
    const cookie = existCookie();
    if (!cookie) {
      return navigate("/login");
    }
  }, [navigate]);

  return (
    <Wrapper as="header">
      <Nav as="nav">
        <Link to={"/main"}>
          <BigLogoSvg />
        </Link>
        <RightNav>
          <li>
            <QuestionSvg />
          </li>
          <li onClick={() => setHeaderAlert(true)}>
            <BellSvg />
            {invites && invites.length > 0 && <span>{invites?.length}</span>}
          </li>
          <li onClick={() => setHeaderMenu(true)}>
            {groupUser && groupUser.groupAvatarImg ? (
              <img
                src={groupUser.groupAvatarImg}
                alt={groupUser.groupUserNickname}
                onError={handleImgError}
              />
            ) : (
              <FakeImg />
            )}

            {headerMenu && <HeaderMenu user={groupUser} />}
          </li>
        </RightNav>
      </Nav>
      <AnimatePresence>
        {headerAlert ? <AlertModal setHeaderAlert={setHeaderAlert} /> : null}
        {editProfile ? (
          <ProfileEditModal
            closeModal={setEditProfile}
            user={groupUser}
            groupId={groupId}
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};

export default GroupHeader;
