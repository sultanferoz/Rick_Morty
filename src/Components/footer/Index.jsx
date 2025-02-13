import { Row, Col, Typography } from "antd";
import {
  GithubOutlined,
  TwitterOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import ImageComponent from "../image/Index";
import int from "/images/int.png";
import star from "/images/atar.png";
import "./styles.css";

const { Text } = Typography;

function Footer() {
  return (
    <div
      className="footer-container"
      style={{
        padding: "20px",
        textAlign: "center",
        color: "white",
      }}
    >
      <Row justify="center" gutter={[16, 16]} style={{ marginBottom: 10 }}>
        <Col>
          <Text style={{ color: "white" }}>
            CHARACTERS:{" "}
            <strong style={{ textDecoration: "underline" }}>826</strong>
          </Text>
        </Col>
        <Col>
          <Text style={{ color: "white" }}>
            LOCATIONS:{" "}
            <strong style={{ textDecoration: "underline" }}>126</strong>
          </Text>
        </Col>
        <Col>
          <Text style={{ color: "white" }}>
            EPISODES:{" "}
            <strong style={{ textDecoration: "underline" }}>51</strong>
          </Text>
        </Col>
      </Row>

      <Row justify="center" align="middle" style={{ marginBottom: 10 }}>
        <Col>
          <Text style={{ color: "white", marginLeft: "4px" }} strong>
            SERVER STATUS
          </Text>
        </Col>
        <Col>
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              background: "green",
              borderRadius: "50%",
            }}
          ></span>
        </Col>
      </Row>

      <Row justify="center" gutter={[16, 16]} style={{ marginBottom: 10 }}>
        <Col>
          <ImageComponent width={40} height={40} image={int} />
          <Text style={{ color: "white" }}>
            {" "}
            Deploys by{" "}
            <strong style={{ textDecoration: "underline" }}>Netlify</strong>
          </Text>
        </Col>
        <Col>
          <ImageComponent width={40} height={40} image={star} />
          <Text style={{ color: "white" }}>
            {" "}
            Powered by{" "}
            <strong style={{ textDecoration: "underline" }}>Stellate</strong>
          </Text>
        </Col>
      </Row>

      <Row
        justify="center"
        gutter={[16, 16]}
        style={{ fontSize: "20px", marginBottom: 10 }}
      >
        <Col>
          <GithubOutlined />
        </Col>
        <Col>
          <TwitterOutlined />
        </Col>
        <Col>
          <HeartOutlined />
        </Col>
      </Row>

      <Row justify="center">
        <Text style={{ color: "white" }}>
          © by{" "}
          <strong style={{ textDecoration: "underline" }}>Sultan Feroz</strong>{" "}
          2025
        </Text>
      </Row>
    </div>
  );
}

export default Footer;
