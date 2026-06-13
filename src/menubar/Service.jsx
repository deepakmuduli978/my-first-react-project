import React from 'react';

const Service = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully");
  };

  return (
    <>
      <h1>Service Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input type="text" name="name" required />
        </div>

        <div>
          <h2>Gender:</h2>

          <label>
            <input type="radio" name="gender" value="Male" />
            Male
          </label>

          <label>
            <input type="radio" name="gender" value="Female" />
            Female
          </label>
        </div>

        <div>
          <h2>Issue:</h2>

          <label>
            <input type="checkbox" name="issue" value="Technical" />
            Technical Issue
          </label>
        </div>

        <div>
          Service:
          <input type="text" name="service" />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Service;