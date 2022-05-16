import { Navbar, Container, Nav } from "react-bootstrap";

export default function MainHeader({ data }) {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav className="me-auto">
              {data &&
                Object.keys(data).map((e, i) => (
                  <Nav.Link key={i} href={`/${e}`}>
                    {`${e}`}
                  </Nav.Link>
                ))}
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
