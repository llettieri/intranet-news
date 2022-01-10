import './App.css';
import {Button, Card, Dropdown} from "react-bootstrap";
import {useState} from "react";

function App() {
    const months = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'November', 'December'];
    const [currentMonth, setCurrentMoth] = useState("None");

    return (
        <div>
            <div className='container-fluid'>
                <h1>{currentMonth}</h1>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select month ...
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            months.map((month) => {
                                return <Dropdown.Item onClick={() => setCurrentMoth(month)}>{month}</Dropdown.Item>
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>

                <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default App;
