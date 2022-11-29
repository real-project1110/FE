import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { readGroupUsers } from "../../../apis/groupUserApi";

const Chat = () => {
  const { groupId, groupUserId } = useParams();
  const [otherUser, setOtherUser] = useState({});

  const { data: groupUserList } = useQuery(
    ["groupUserList", groupId],
    () => readGroupUsers(groupId),
    { retry: 1 }
  );

  useEffect(() => {
    if (groupUserList) {
      setOtherUser(groupUserList.file);
    }
  }, []);

  return (
    <div>
      groupId:{groupId} groupUserId:{groupUserId}
    </div>
  );
};

export default Chat;
