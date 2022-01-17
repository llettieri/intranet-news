import './App.css';
import {useState} from "react";
import {Button, Card, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {addPost, deletePost, getAllPosts, updatePost} from "./service/postService";

function App() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState({});
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    useState(() => {
        getAllPosts().then(r => setPosts(r.data));
    });

    function onAddButton() {
        const data = {
            "title": title, "text": text
        };
        addPost(data).then(() => getAllPosts().then(r => setPosts(r.data)));
        setShowAddModal(false);
    }

    function onDeleteButton(id) {
        deletePost(id).then(() => getAllPosts().then(r => setPosts(r.data)));
    }

    function onUpdateButton() {
        updatePost(selectedPost).then(() => getAllPosts().then(r => setPosts(r.data)));
        setShowUpdateModal(false);
    }

    return (
        <div>
            <Modal id="add_modal" show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>New Post</Modal.Header>
                <Modal.Body>
                    <div className='container-fluid'>
                        <Form>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter a title"
                                              onChange={(e) => setTitle(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="text">
                                <Form.Label>Text</Form.Label>
                                <Form.Control as="textarea" type="text" placeholder="Some text in here ..."
                                              onChange={(e) => setText(e.target.value)}/>
                            </Form.Group>
                            <Button onClick={() => onAddButton()} variant="primary" type="button">
                                Add
                            </Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal id="update_modal" show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
                <Modal.Header closeButton>Update Post</Modal.Header>
                <Modal.Body>
                    <div className='container-fluid'>
                        <Form>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter a title"
                                              onChange={(e) => selectedPost.title = e.target.value}
                                              defaultValue={selectedPost.title}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="text">
                                <Form.Label>Text</Form.Label>
                                <Form.Control as="textarea" type="text"
                                              placeholder="Some text in here ..."
                                              onChange={(e) => selectedPost.text = e.target.value}
                                              defaultValue={selectedPost.text}/>
                            </Form.Group>
                            <Button onClick={() => onUpdateButton()} variant="primary" type="button">
                                Update
                            </Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>

            <Container>
                <Row>
                    {
                        posts.map((post) => {
                            return (
                                <Col>
                                    <Card key={post.id} style={{maxWidth: '25rem'}}>
                                        <Card.Body>
                                            <Button variant="danger" style={{float: "right"}}
                                                    onClick={() => onDeleteButton(post.id)}>X</Button>
                                            <Button style={{float: "right"}}
                                                    onClick={() => {
                                                        setShowUpdateModal(true);
                                                        setSelectedPost(post);
                                                    }}>Stift</Button>
                                            <Card.Title>{post.title}</Card.Title>
                                            <Card.Text>
                                                {post.text}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                    <Col>
                        <Card style={{width: '8.4rem'}}>
                            <Card.Body>
                                <img onClick={() => setShowAddModal(true)}
                                     src="https://img.icons8.com/ios/100/000000/add--v2.png"
                                     alt="add"/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
