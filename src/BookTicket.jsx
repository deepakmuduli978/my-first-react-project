import React, { useState } from 'react';

const BookTicket = () => {

  const [formData, setFormData] = useState({
    from: "",
    dest1: "",
    date: "",
    Chooseclass: "",
    Typeclass: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert("Ticket Booked Successfully");
  };

  return (
    <>
      <h2>Book Ticket</h2>

      <form onSubmit={handleSubmit}>
        <div>
          From:
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={changeHandler}
          />

          <span> ➜ </span>

          To:
          <input
            type="text"
            name="dest1"
            value={formData.dest1}
            onChange={changeHandler}
          />
        </div>

        <br />

        <div>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={changeHandler}
          />
        </div>

        <br />

        <div>
          All Classes:
          <select
            name="Chooseclass"
            value={formData.Chooseclass}
            onChange={changeHandler}
          >
            <option value="">Select Class</option>
            <option value="AC">AC</option>
            <option value="Sleeper">Sleeper</option>
            <option value="General">General</option>
          </select>
        </div>

        <br />

        <div>
          Type of Ticket:
          <select
            name="Typeclass"
            value={formData.Typeclass}
            onChange={changeHandler}
          >
            <option value="">Select Type</option>
            <option value="Tatkal">Tatkal</option>
            <option value="Ladies">Ladies</option>
            <option value="Disabled">Disabled</option>
          </select>
        </div>

        <br />

        <button type="submit">Book Ticket</button>
      </form>
    </>
  );
};

export default BookTicket;