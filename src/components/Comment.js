import "./Comment.css";
import CommentDate from "./CommentDate";
import CommentUserInfo from "./CommentUserInfo";
import CommentWrapper from "./CommentWrapper";

function Comment({date,text,author}) {

  
  return (
    <div >
    
      <CommentWrapper className="comment-first">
        <CommentUserInfo
          avatarUrl={author.avatarUrl}
          name={author.name}
        />
      </CommentWrapper>

        <div className="Comment-text">{text}
        <CommentDate date={date} />

        </div>
    </div>
  );
}
export default Comment;
