import React from "react";

export default function EditForm(props) {
  console.log("the edit foorm data", props.ticketData);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={props.ticketData.title}
          onChange={() => props.handleFormData()}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          value={props.ticketData.description}
          onChange={() => props.handleFormData()}
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          value={props.ticketData.price}
          onChange={""}
        />
        <button type="submit">SAVE</button>
      </form>
    </div>
  );
}
