function ContentTask(props) {

  return (
        <div className='content_task'>
            <h2>{props.task.title}</h2>
            <p>{props.task.description}</p>
        </div>
  );
}

export default ContentTask;
