import React, { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export default function Contents({ data }) {
  const style = {
    display: "flex",
  };
  return (
    <div className="contents">
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
