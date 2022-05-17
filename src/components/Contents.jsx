import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

export default function Contents({ data }) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {data.map((e, i) => {
              return (
                <div>
                  <Link key={i} to={`${e}`}>
                    {e}
                  </Link>
                </div>
              );
            })}
          </Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
