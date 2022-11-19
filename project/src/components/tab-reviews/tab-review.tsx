// Типы
import { CommentData } from '../../types/film';

// Компоненты
import Comment from '../comment/comment';

export default function TabReview({ comments }: { comments: CommentData[] }): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <Comment comment={comments[0]} />
        <Comment comment={comments[2]} />
        <Comment comment={comments[4]} />
      </div>
      <div className="film-card__reviews-col">
        <Comment comment={comments[1]} />
        <Comment comment={comments[3]} />
        <Comment comment={comments[5]} />
      </div>
    </div>
  );
}
