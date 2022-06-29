// import React, { useEffect, useState } from "react";
// import { ChatEngineWrapper, Socket, ChatFeed } from "react-chat-engine";
// import styled, { css } from "styled-components";
// import "./Styles.scss";
// const ChatEngine = (props) => {
//   const { pVisible, pChat, pUser } = props;

//   const [showChat, setShowChat] = useState(false);

//   useEffect(() => {
//     if (pVisible) {
//       setTimeout(() => {
//         setShowChat(true);
//       }, 500);
//     }
//   });

//   return (
//     <MyDiv className="transition-5" pVisible={pVisible}>
//       {showChat && (
//         <ChatEngineWrapper>
//           <Socket
//             projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
//             userName={pUser.email}
//             userSecret={pUser.email}
//           />

//           <ChatFeed activeChat={pChat.id} />
//         </ChatEngineWrapper>
//       )}
//     </MyDiv>
//   );
// };

// export default ChatEngine;

// const MyDiv = styled.div`
//   width: 100%;
//   background-color: white;
//   position: relative;
//   ${(props) => css`
//     height: ${props.pVisible ? '100%' : '0%'};
//     z-index: ${props.pVisible ? 100 : 0};
//   `}
// `;
