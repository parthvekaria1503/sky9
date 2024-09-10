import React from 'react'

function Card({username, btnText="visit me"}) {
    console.log(username);
  return (
    <div>
        <img src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" alt="AirMax Pro" />
    <div>
    <h1>{username}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis?</p>
    <button>{btnText } →</button>
  </div>
</div>
  )
}

export default Card