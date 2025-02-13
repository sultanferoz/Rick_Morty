import { Layout, Divider } from "antd";
import Header from "../../Components/header/Index";
import Footer from "../../Components/footer/Index";
const { Header: AntHeader, Footer: AntFooter, Content } = Layout;

function MainLayout({ children }) {
  return (
    <>
      <Layout>
        <AntHeader style={{ backgroundColor: "#202329", padding: "0" }}>
          <Header />
        </AntHeader>
        <Content
          style={{
            backgroundColor: "#272b33",
          }}
        >
          {children}
        </Content>
        <AntFooter style={{ backgroundColor: "#202329" }}>
          <Footer />
        </AntFooter>
      </Layout>
    </>
  );
}

export default MainLayout;
