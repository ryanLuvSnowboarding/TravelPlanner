import { Layout, Menu, Dropdown, Avatar } from "antd";
import React, { useEffect, useState } from "react";
import Map from "./components/map";
import "./Home.css";
import SearchCard from "./components/nearbySearch/searchCard";
import DraggableList from "./components/PlannerList/draggableList";

const { Header, Content, Sider } = Layout;

const Home = () => {
  const [map, setMap] = useState(null);

  // Dummy user data for the profile dropdown
  const user = {
    name: "Current User",
    avatarUrl: "URL_TO_YOUR_AVATAR_IMAGE",
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="currentTrip">CurrentTrip</Menu.Item>
      <Menu.Item key="favorite">Favorite</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header
        style={{
          zIndex: 1,
          width: "100%",
          background: "pink",
          padding: "20px 0", // Adjust padding as needed
        }}
      >
        <div className="logo" />
        <div className="header-container">
          <div className="header-button-container">
            <button>Home</button>
          </div>
        </div>
      </Header>

      <Content
        style={{
          padding: "20px",
          overflow: "auto",
          maxHeight: "calc(100vh - 60px)",
          background: "coral",
        }}
      >
        <div>
          <SearchCard />
        </div>
      </Content>

      <Content style={{ paddingTop: 80 }}>
        <div className="profile-container">
          <Dropdown overlay={profileMenu}>
            <span className="ant-dropdown-link">
              <Avatar src={user.avatarUrl} /> {user.name}
            </span>
          </Dropdown>
        </div>
        {/* Sidebar Content */}
        {/* Add your sidebar content here */}
        <div
          id="content-wrapper"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Middle Section - Draggable List */}
          <div style={{ width: "90%" }}>
            <div className="content">
              <DraggableList />
            </div>
          </div>

          <div
            id="map"
            style={{
              width: "60%",
              height: "600px",
            }}
          >
            <Map map={map} />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
