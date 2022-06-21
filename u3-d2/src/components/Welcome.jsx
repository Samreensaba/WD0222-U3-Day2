import { Component } from "react"
import { Container, Row, Card} from "react-bootstrap"

class Welcome extends Component{
    render(){
        return(
            <Container className="w-100">
                <Row className="justify-content-center mt-3">
                <>
                    <Card className="w-100 mb-2">
                      <Card.Img variant="top" src="https://s26162.pcdn.co/wp-content/uploads/2022/05/Best-Reviewed-Books.jpeg" style={{height:"350px"}} />
                      <Card.Body className="bg-info">
                        <h1 className="text-center text-warning">
                          Welcome to Strive Books!
                        </h1>
                      </Card.Body>
                    </Card>
                </>
                </Row>
            </Container>
        )
    }
}

export default Welcome