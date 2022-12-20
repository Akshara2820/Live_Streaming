import { React, useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";

function JoinRoom() {
  const ENDPOINT = process.env.REACT_APP_TOKEN_ENDPOINT;
  const ROOM_ID = process.env.REACT_APP_ROOM_ID;

  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    token: "",
    role:'',
  });

  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    hmsActions.join({
      userName: inputValues.name,
      authToken: inputValues.token,
      role:inputValues.role
    });
  };

  return (
    <form className="join" onSubmit={handleSubmit}>
     <h2>Join Stream</h2>
      <input
        required
        value={inputValues.name}
        onChange={handleInputChange}
        id="name"
        type="text"
        name="name"
        placeholder="Your name"
      />
      <input
        required
        value={inputValues.token}
        onChange={handleInputChange}
        id="token"
        type="text"
        name="token"
        placeholder="Auth token"
      />

      <select
        type="text"
        id='role'
        name="role"
        required
        value={inputValues.role}
        onChange={handleInputChange}
        placeholder="Select Role"
      >
        <option>broadcaster</option>
        <option>hls-viewer</option>
      </select>
      <button className='join-btn'>Join</button>
    </form>
  );
}

export default JoinRoom;
