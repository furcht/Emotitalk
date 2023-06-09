import MainNav from "@/components/MainNav";
import ChatWindow from "@/components/ChatWindow";
import MessageBox from "@/components/MessageBox";
import RoomsPanel from "@/components/RoomsPanel";
import Overlay from "@/components/Overlay";

import { io } from "socket.io-client";
let socket;

import { useReducer, useEffect } from "react";
const baseReducer = (state, action) => {
  switch(action.type) {
    case "CONNECTED":

    case "MESSAGE_SEND":
      console.log('Broadcast Message');
      return {...state};
    default:
      throw new Error("Action not defined!");
  }
}

export default function Home() {
  const [baseState, dispatchState] = useReducer(baseReducer, {
    isLoading: true,
    message: ""
  })

  const initializeSocket = async () => {
    socket = io('https://emotitalk.net/');

    socket.on('initialized', obj => {
      console.log("LOADED:", obj)
    })
  }

  useEffect(() => {
    initializeSocket();
  }, [])

  return (
    <>
      <main className="l-mainView">
        <MainNav />
        <div className="l-mainView__chat">
          <ChatWindow />
          <MessageBox dispatcher={dispatchState} />
        </div>
        <RoomsPanel />
      </main>
      <Overlay />
    </>
  )
}
