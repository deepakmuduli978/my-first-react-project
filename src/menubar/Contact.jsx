import React from 'react'

const Contact = () => {
  return (
    <>
    <form method='put'>
      <div>Name:<input type="text" name='name'></input></div>
    <div>Email:<input type="mail" name='email'></input></div>
    <div>Phone:<input type="number" name='phone'></input> </div>
    <div>password:<input type="password" name='password'></input></div>
    <div><button type="submit">SPress  Ok</button>
    <button type="reset">Clear</button></div>
    </form>
    </>
  )
}

export default Contact