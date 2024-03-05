import SingIn from "./pages/SingIn/SingIn";
import "./App.css";

const App = () => {
  return (
    <>
      <SingIn />
      {/* <section className="msger">
        <header className="msger-header">
          <div className="msger-header-title">
            <i className="fas fa-comment-alt"></i> PabloChat
          </div>
        </header>

        <main className="msger-chat">
          <Message msg="Hola" time="12.45" user="Pablo" rightMsg={true} />
        </main>

        <form className="msger-inputarea">
          <input
            type="text"
            className="msger-input"
            placeholder="Enter your message..."
          />
          <button type="submit" className="msger-send-btn">
            Send
          </button>
        </form>
      </section> */}
    </>
  );
};

const Message = ({
  msg,
  user,
  time,
  rightMsg,
}: {
  msg: string;
  user: string;
  time: string;
  rightMsg: boolean;
}) => (
  <div className={rightMsg ? "msg right-msg" : "msg left-msg"}>
    <div
      className="msg-img"
      style={{
        backgroundImage:
          "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
      }}
    ></div>

    <div className="msg-bubble">
      <div className="msg-info">
        <div className="msg-info-name">{user}</div>
        <div className="msg-info-time">{time}</div>
      </div>

      <div className="msg-text">{msg}</div>
    </div>
  </div>
);

export default App;
