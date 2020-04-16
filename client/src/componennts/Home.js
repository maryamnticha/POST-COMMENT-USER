import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/action";
import { getallpost } from "../redux/actions/postaction";
import { Navbar, Form, Nav, Button } from "react-bootstrap";
class Home extends Component {
  logout = (e) => {
    e.preventDefault();
    this.props.logout(this.state);
  };

  render() {
    const { profile } = this.props;
    console.log(profile);
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">This is the USER HOME</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">ARTICLE</Nav.Link>
            <Nav.Link href="#pricing">IDEAS</Nav.Link>
          </Nav>
          <Form inline>
            <Button className="Login" type="submit" name="submit">
              <Link className="Login" to="/profile">
                See the Profile
              </Link>
            </Button>

            <Button className="Login" variant="danger" onClick={this.logout}>
              <Link className="Login" to="/">
                Logout
              </Link>
            </Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  profile: state.authReducer.profile,
});
export default connect(mapStateToProps, { getallpost, logout })(Home);
