import { useMutation } from "@apollo/client";
import React, { useState } from "react";

const CreatePostComponent = () => {
  const [img, setImg] = useState([]);
  const [title, setTitle] = useState();
  // const [addCategory, { data, loading, error }] = useMutation(add_Category);

  const handleSubmit = () => {
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("img", img);
    console.log(img);
  };

  return (
    <div>
      CreatePostComponent
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default CreatePostComponent;
