// Типы
import { CommentData } from '../../types/film';

// Компоненты
import Comment from '../comment/comment';

export default function TabReview({ comments }: { comments: CommentData[] }): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments
          .map((comment: CommentData) => (
            < Comment
              key={comment.id}
              comment={comment}
            />))}
      </div>
    </div>
  );
}
