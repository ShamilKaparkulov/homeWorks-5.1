import "./CommentDate.css";

function CommentDate(props) {
  console.log(props);
  function formatDate(date) {
    return date?.toLocaleDateString(); // Wed Oct 12 2022 12:51:59 GMT+0600 (Восточный Казахстан)
  }

  return <div className="Comment-date">{formatDate(props.date)}</div>;
}

export default CommentDate;
