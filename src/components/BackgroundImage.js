import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function BackgroundImage() {
    return (
  <Card className="bg-green text-black">
    <Card.ImgOverlay style={{ backgroundColor: "#90EE90", width: "2000px", height:"300px", marginRight:"1000px"}}>
      <Card.Text>
        <h2>Order groceries for delivery or pickup today.</h2>
      </Card.Text>
      <Card.Text>
        <h3>Whatever you want from local stores, delivered right to your door.</h3>
      </Card.Text>
      <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <h4>Enter Your Address</h4>
      <Form.Control type="address" placeholder="Enter address" />
      <Form.Text className="text-muted">
        <br></br>
      <Form.Control input type="submit" style={{ marginLeft:"850px", width:"200px"}}/>
      </Form.Text>
    </Form.Group>
  </Form>
    </Card.ImgOverlay>
        </Card>
          )
  }