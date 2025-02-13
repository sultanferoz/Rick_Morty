import { Col, Row, Input } from "antd";
const { Search } = Input;
import Heading from "../heading/Index";
import { fetchCharacterData } from "../../Redux/characterSlice/CharacterSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ImageComponent from "../image/Index";
import logo from "/images/logo.png";
function Header() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [inputHistory, setInputHistory] = useState([]);

  const handleSearch = (value) => {
    const searchQuery = encodeURIComponent(value);
    dispatch(fetchCharacterData({ query: searchQuery }));
    if (searchInput.trim() !== "") {
      setInputHistory([...inputHistory, searchInput]);
      setSearchInput("");
    }
  };

  return (
    <>
      <Row
        style={{
          display: "flex",

          justifyContent: "space-between",
        }}
      >
        <Col
          span={24}
          xs={4}
          sm={8}
          md={10}
          lg={10}
          xl={10}
          offset={1}
          style={{ color: "white" }}
        >
          <ImageComponent width={80} height={70} image={logo} />
        </Col>
        <Col
          span={24}
          xs={10}
          sm={10}
          md={10}
          lg={8}
          offset={1}
          style={{ margin: "10px 10px 0px 2px" }}
        >
          <Search
            value={searchInput}
            placeholder="search character...."
            enterButton
            size="large"
            onChange={(e) => setSearchInput(e.target.value)}
            onSearch={handleSearch}
            style={{ color: "white" }}
          />
        </Col>
      </Row>
    </>
  );
}

export default Header;
