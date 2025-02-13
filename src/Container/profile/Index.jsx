import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Spin, Card, Typography, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import MainLayout from "../mainLayout/Index";
import {
  fetchCharacterId,
  singleData,
} from "../../Redux/characterSlice/CharacterSlice";

const { Title, Text } = Typography;

function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleCharacter = useSelector(singleData);
  const isLoading = useSelector((state) => state.character.isLoading);

  useEffect(() => {
    if (!singleCharacter?.id) {
      dispatch(fetchCharacterId(id)).catch((err) => console.error(err));
    }
  }, [dispatch, id, singleCharacter]);

  return (
    <MainLayout>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#272b33",
        }}
      >
        <Row justify="center" style={{ width: "100%" }}>
          <Col xs={24} sm={20} md={16} lg={12} xl={10}>
            <Button type="text" style={{ marginBottom: "20px" }}>
              <Link to="/" style={{ color: "#fff", fontSize: "16px" }}>
                <LeftOutlined /> Back to Homepage
              </Link>
            </Button>

            {isLoading ? (
              <Spin tip="Loading..." size="large" style={{ color: "#fff" }} />
            ) : !singleCharacter?.id ? (
              <Text type="danger">Character not found!</Text>
            ) : (
              <Card
                style={{
                  maxWidth: "600px",
                  margin: "auto",
                  padding: "20px",
                  borderRadius: "12px",
                  textAlign: "center",
                  background: "#ffffff",
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img
                  src={singleCharacter.image}
                  alt={singleCharacter.name}
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginBottom: "20px",
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Title level={2} style={{ color: "#333" }}>
                  {singleCharacter.name}
                </Title>
                <Text strong style={{ fontSize: "16px", color: "#666" }}>
                  {singleCharacter.status} • {singleCharacter.species}
                </Text>

                <Row gutter={16} style={{ marginTop: "20px" }}>
                  <Col span={12}>
                    <Card
                      bordered={false}
                      style={{
                        background: "#f4f4f4",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    >
                      <Text strong>Gender</Text>
                      <br />
                      <Text>{singleCharacter.gender}</Text>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card
                      bordered={false}
                      style={{
                        background: "#f4f4f4",
                        padding: "10px",
                        borderRadius: "8px",
                      }}
                    >
                      <Text strong>Location</Text>
                      <br />
                      <Text>
                        {singleCharacter?.location?.name || "Unknown"}
                      </Text>
                    </Card>
                  </Col>
                </Row>
              </Card>
            )}
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
}

export default Profile;
