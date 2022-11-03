import React, { useEffect, useState } from 'react';

function Form({AddTask}) {
  const [title, setTitle] = useState('')
  // const AddThisTask=(e)=>{AddTask(e,title)}
  const AddThisTask=(e)=>{AddTask(e,title)}


//  const tab = JSON.parse(localStorage.getItem("textBase"))
    return (
      <form onSubmit={AddThisTask}>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='wpisz coś' />
          <input type="submit" value="send" />
      </form>
    );
  }
export default Form;