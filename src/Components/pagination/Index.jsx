import { Pagination } from "antd";
const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return <a style={{ color: "white" }}>Previous</a>;
  }
  if (type === "next") {
    return <a style={{ color: "white" }}>Next</a>;
  }
  return originalElement;
};
function PaginationComponent(props) {
  return (
    <Pagination
      style={{ font: "caption", Color: "white", marginBottom: "8px" }}
      {...props}
      itemRender={itemRender}
    />
  );
}

export default PaginationComponent;
