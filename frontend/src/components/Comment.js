import React from 'react';

const Comment = ({deleteComment, text, id}) => {

  const handleDelete = () => {
    deleteComment(id);
  }

  return (
    <div>
      <p>
        {deleteComment && (
          <i
            className="fa fa-times text-danger mr-2"
            onClick={handleDelete}
          />
        )}
        {text}
      </p>
    </div>
  );
}

export default Comment;
