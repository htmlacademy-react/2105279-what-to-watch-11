import { CommentData } from '../../types/film';
import Comment from '../comment/comment';

export default function TabReview({ comments }: { comments: CommentData[] }): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments
          .map((comment: CommentData, index) => index % 2 === 0 && (
            < Comment
              key={comment.id}
              comment={comment}
            />))}
      </div>
      <div className="film-card__reviews-col">
        {comments
          .map((comment: CommentData, index) => index % 2 !== 0 && (
            < Comment
              key={comment.id}
              comment={comment}
            />))}
      </div>
    </div>
  );
}
