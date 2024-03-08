import { useState } from "react";
import Comment from "./Comment";

export default function CommentForm() {
  const [formData, setFormData] = useState({
    username: "",
    feedback: "",
    rating: 0,
  });

  let [dataArr, setDataArr] = useState([]);

  const handleInputChange = (event) => {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    setDataArr([...dataArr, formData]);

    setFormData({
      username: "",
      feedback: "",
      rating: 0,
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          value={formData.username}
          placeholder="Enter Username"
          id="username"
          name="username"
          onChange={handleInputChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="feedback">Feedback</label>
        <br />
        <textarea
          name="feedback"
          value={formData.feedback}
          id="feedback"
          cols="30"
          rows="10"
          placeholder="Enter Feedback"
          onChange={handleInputChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label> <br />
        <input
          type="number"
          name="rating"
          id="rating"
          value={formData.rating}
          min={0}
          max={5}
          onChange={handleInputChange}
        />{" "}
        <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <h2>Comments</h2>
      <Comment prop={dataArr}/>
    </>
  );
}
