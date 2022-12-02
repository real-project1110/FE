import { useCallback } from "react";
import io from "socket.io-client";

const backUrl = process.env.REACT_APP_SERVER_URL;

const sockets = {};

const useSocket = (groupId) => {
  const disconnect = useCallback(() => {
    if (groupId) {
      sockets[groupId].disconnect();
      delete sockets[groupId];
    }
  }, [groupId]);

  //
  if (!groupId) {
    return [undefined, disconnect];
  }

  if (!sockets[groupId]) {
    sockets[groupId] = io.connect(`${backUrl}`, {
      transports: ["websocket"],
    });
  }

  return [sockets[groupId], disconnect];
};

export default useSocket;