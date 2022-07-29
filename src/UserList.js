import React from "react";
import { Msg } from "./Msg";

export function UserList() {
  const users = [
    { name: "Aravind", pic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { name: "Abhishek", pic: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" },
    { name: "Mohan", pic: "https://1.bp.blogspot.com/-OUtpaIR5QhI/YTuyWw8XvtI/AAAAAAAAuUk/ZtNLZvNSoL8pyaYESOjwReXEhYu1zFltgCLcBGAsYHQ/s1536/Best-Profile-Pic-For-Boys%2B%252813%2529.jpg" }
  ];
  return (
    <div>
      {users.map(us => <Msg name={us.name} pic={us.pic} />)}

    </div>
  );
}
