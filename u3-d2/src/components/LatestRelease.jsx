import {Component} from "react" 
import {Row, Col, Card, Button} from "react-bootstrap"
import booksArray from "../data/books/fantasy.json"

class LatestRelease extends Component{
    render(){
        return(
            <Row className="ml-5 mr-5">
                {booksArray.slice(0,12).map(book => (
                         <Col key={book.asin} className="col-sm-12 col-md-6 col-lg-3">
                         <Card style={{ width: '18rem', height: '534px' }} className="mb-3">
                             <Card.Img variant="top" src={book.img} style={{height:"370px", width:"100%"}} />
                             <Card.Body>
                             <Card.Title>{book.title}</Card.Title>
                             <Button variant="primary">Buy</Button>
                             </Card.Body>
                         </Card>
                         </Col>   
                            
                        ))
                    } 
                        
                    
            </Row> 
            
        )
    }
}
export default LatestRelease