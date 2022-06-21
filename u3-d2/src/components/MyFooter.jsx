import { Component } from "react";

class MyFooter extends Component {
    render(){
        return(
            <footer className="text-center bg-light mt-2">
                <h2>Strive Books</h2>
                <p>Address: 98 Lynton Avenue, London, NW96PE<br></br>
                Email: Strivebooks@gmail.com<br></br>
                Phone: 012 345 6789<br></br>
                Follow us @ <a href="#">facebook</a> <a href="#">Twitter</a> <a href="#">Instagram</a></p>
            </footer>
        )
    }
}
export default MyFooter