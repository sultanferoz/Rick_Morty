import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharacterData,
  selectData,
  paginationData,
  statusData,
  selectCurrentQuery,
  singleData,
} from "../../Redux/characterSlice/CharacterSlice";
import { Spin, Row, Col } from "antd";
import CardComponent from "../../Components/cardComponent/Index";
import PaginationComponent from "../../Components/pagination/Index";
import MainLayout from "../mainLayout/Index";
import HeroSection from "../../Components/heroSection/Index";
import * as characterSlice from "../../Redux/characterSlice/CharacterSlice";

console.log(characterSlice);

function HomePage() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const singleCharacter = useSelector(singleData);
  console.log(singleCharacter, "check");

  const pagination = useSelector(paginationData);
  const status = useSelector(statusData);
  const currentQuery = useSelector(selectCurrentQuery);

  useEffect(() => {
    dispatch(fetchCharacterData({ page: 1, query: currentQuery }));
  }, [dispatch, currentQuery]);

  const handlePaginationChange = (page) => {
    dispatch(fetchCharacterData({ page, query: currentQuery }));
  };

  return (
    <MainLayout>
      <HeroSection />
      <Row justify="center" gutter={[16, 16]} style={{ margin: "0px" }}>
        {status === "pending" ? (
          <Spin tip="Loading..." size="large" />
        ) : (
          data.map((character) => (
            <Col key={character.id} xs={14} sm={10} md={10} lg={8} xl={5}>
              <CardComponent
                title={character.name}
                image={character.image}
                id={character.id}
              />
            </Col>
          ))
        )}
      </Row>
      {pagination && pagination.count > 20 && (
        <Row justify="center" style={{ marginTop: "20px" }}>
          <PaginationComponent
            current={pagination.currentPage || 1}
            onChange={handlePaginationChange}
            pageSize={20}
            total={pagination.count}
          />
        </Row>
      )}
    </MainLayout>
  );
}

export default HomePage;
