import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { addPosts } from "../redux/ActionCreators";
function RenderPostItem({ posts }) {
  if (posts && posts.length > 0) {
    // const filteredPosts = posts.filter((post) => post.status === true);
    // if (filteredPosts.length === 0) {
    //   return (
    //     <div className="text-center mt-5">
    //       <h1>New Post</h1>
    //       <h5>There are no posts displayed</h5>
    //     </div>
    //   );
    // }

    // const filteredPosts = posts.filter((post) => post.status === true);

    // if (filteredPosts.length === 0) {
    //   return (
    //     <div className="text-center mt-5">
    //       <h1>New Post</h1>
    //       <h5>There are no posts displayed</h5>
    //     </div>
    //   );
    // }

    const postList = posts.map((post) => {
      if (Array.isArray(post.tags)) {
        return (
          <div key={post.id}>
            <p>{post.post}</p>
            <div className="border rounded-3 p-3">
              {/* {post.id}, &nbsp; */}
              <h3>{post.title} </h3>
              {post.author} <br></br>
              {post.content} <br></br>
              {post.tags.map((tag, index) => (
                <button
                  key={index}
                  type="button"
                  className="me-2 mt-3 btn btn-outline-secondary"
                >
                  {tag}
                </button>
              ))}
              <br></br>
              <small>
                <i>Published on {new Date(post.timestamp).toDateString()}</i>
              </small>
            </div>
          </div>
        );
      } else {
        return <div>null</div>;
      }
    });
    return (
      <div>
        <h1 className="text-center mt-5">New Post</h1>
        {postList}
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-center mt-5">New Post</h1>
        <h3>No data available</h3>
      </div>
    );
  }
}

function PostForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  // const [status, setStatus] = useState(true); // Thêm trường status
  const dispatch = useDispatch();
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      // Reset các trường dữ liệu
      setTitle("");
      setAuthor("");
      setContent("");
      setTags([]);
      // setStatus("false");
    }
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (name === "title") {
      setTitle(value);
    } else if (name === "author") {
      setAuthor(value);
    } else if (name === "content") {
      setContent(value);
    } else if (name === "tags") {
      const selectedTags = Array.from(
        target.selectedOptions,
        (option) => option.value
      );
      setTags(selectedTags);
    }
    // else if (name === "status") {
    //   // Xử lý trường status
    //   setStatus(value);
    // }
  };

  const handleSubmit = (event) => {
    toggleModal();

    dispatch(addPosts("123", title, author, content, tags));
    event.preventDefault();
  };

  return (
    <div>
      <Button color="info" outline onClick={toggleModal} className="m-5 ">
        Add New Post
      </Button>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add New Post</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="author">Your Name</Label>
              <Input
                type="text"
                id="author"
                name="author"
                placeholder="Your Name"
                value={author}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                value={title}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="content">Content</Label>
              <Input
                type="textarea"
                id="content"
                name="content"
                rows="6"
                value={content}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tags">Tags</Label>
              <Input
                type="select"
                id="tags"
                name="tags"
                value={tags}
                onChange={handleInputChange}
                multiple
              >
                <option>JavaScript</option>
                <option>Programming</option>
                <option>Web Development</option>
              </Input>
            </FormGroup>
            {/* <FormGroup>
              <Label for="status">Status</Label>
              <Input
                type="select"
                id="status"
                name="status"
                value={status}
                onChange={handleInputChange}
              >
                <option value={true}>True</option>
                <option value={false}>False</option>
              </Input>
            </FormGroup> */}

            <Button type="submit" color="primary">
              Submit Post
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

function Post1() {
  //   useEffect(() => {
  //     dispatch(fetchPosts());
  //   }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 m-1">
          <RenderPostItem posts={posts} />
          <PostForm />
        </div>
      </div>
    </div>
  );
}

export default Post1;
