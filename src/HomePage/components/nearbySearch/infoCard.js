import React from "react";
import PhotoExtract from "./photoExtract";
import { Card, Image, Button, Typography, Space } from "antd";
import { EnvironmentOutlined, StarOutlined } from "@ant-design/icons";

const { Text } = Typography;

function InfoCard({ place }) {
  const photoReference = place.photos[0].photoReference;
  const photoUrl = PhotoExtract(photoReference);
  return (
    <Card
      bordered={false}
      style={{ borderRadius: 8, width: 390, backgroundColor: "#FBEAEB" }}
      bodyStyle={{ display: "flex", alignItems: "center" }}
    >
      {/* Left Part (Info Text) */}
      <div style={{ flex: 3 }}>
        <div>
          <h3 style={{ marginLeft: "5px" }}>{place.name}</h3>
        </div>
        <div className="align-center justify-between">
          <span>
            <Text style={{ marginLeft: "5px" }}>{place.rating}</Text>
            <StarOutlined />
          </span>
          <span>
            <Text>({place.userRatingsTotal})</Text>
          </span>
          <span>
            <Button type="primary" size="small">
              Go to website
            </Button>
          </span>
        </div>
        <Space direction="vertical" size={10}>
          <div>
            <EnvironmentOutlined style={{ marginLeft: "5px", marginBottom:"5px" }} />
            <Text >{place.vicinity}</Text>
          </div>
        </Space>
      </div>
      {/* Right Part (Profile Picture) */}
      <div style={{ marginRight: "10px" }}>
        <Image
          src={photoUrl}
          style={{
            marginTop: "10px",
            height: "80px",
            width: "90px",
            borderRadius: 8,
          }} preview={false}
        />
      </div>
    </Card>
  );
}

export default InfoCard;
