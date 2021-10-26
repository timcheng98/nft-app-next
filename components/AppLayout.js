import AppTabBar from "./AppTabBar";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { Row, Col, Affix } from "antd";

const AppLayout = ({ children, fullWidth = false }) => {
  return (
    <div style={{ backgroundColor: 'rgb(250, 249, 250)'}}>
      <Affix style={{ backgroundColor: '#fff', zIndex: 9999 }}>
        <AppHeader />
      </Affix>

      <Row justify="center">
        <Col span={fullWidth ? 24 : 22}>
          <div style={{ minHeight: "100vh" }}>{children}</div>
        </Col>
      </Row>

      <AppFooter />
      <AppTabBar />
    </div>
  );
};

export default AppLayout;
