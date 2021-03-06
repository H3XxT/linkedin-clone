import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

// styled-components
const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  flex: 0.2;
  border-radius: 10px;
  text-align: center;
  height: fit-content;
`;

const SidebarTop = styled.div`
  .sidebar__avatar {
    margin-bottom: 10px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid LightGray;
  border-bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  padding-bottom: 10px;

  > img {
    margin-bottom: -20px;
    width: 100%;
    height: 60px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
  }

  > h4 {
    color: gray;
    font-size: 12px;
  }

  > h2 {
    font-size: 18px;
  }
`;

const SidebarStats = styled.div`
  .sidebar__stat {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  .sidebar__stat > p {
    color: gray;
    font-size: 13px;
    font-weight: 600;
  }

  .sidebar__statNumber {
    font-weight: bold;
    color: #0a66c2 !important;
  }
`;

const SidebarBottom = styled.div`
  text-align: left;
  padding: 10px;
  border: 1px solid LightGray;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;

  > p {
    font-size: 13px;
    padding-bottom: 10px;
  }
`;

const SidebarRecntItems = styled.div`
  display: flex;
  font-size: 13px;
  color: gray;
  font-weight: bolder;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;

  :hover {
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
  }

  .sidebar__hash {
    margin-left: 10px;
    margin-right: 5px;
  }
`;

const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <SidebarRecntItems>
      <div className="sidebar__hash">#</div>
      <p>{topic}</p>
    </SidebarRecntItems>
  );

  return (
    <SidebarContainer>
      <SidebarTop>
        <img
          src="https://images.unsplash.com/photo-1652489997208-87ffeffc072b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="banner"
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </SidebarTop>
      <SidebarStats>
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,551</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,551</p>
        </div>
      </SidebarStats>
      <SidebarBottom>
        <p>Recent</p>
        {recentItem("React")}
        {recentItem("Vue")}
        {recentItem("Angular")}
        {recentItem("Go")}
      </SidebarBottom>
    </SidebarContainer>
  );
};

export default Sidebar;
