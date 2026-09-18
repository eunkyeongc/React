import Comment from './Comment';

const comments = [
    {
        name : "홍은경" ,
        comment : '안녕하세요,  자유로운 영혼입니다.'        
    },

    {
        name : "유재석" ,
        comment : '리엑트 재미있어요!'        
    },

    {
        name : "석쌤" ,
        comment : '같이 공부하는 즐거움을 느껴보아요~.'        
    },
];

function CommentList() {
    return (

        // map 기본형
        <div>
           {comments.map((comment) => {
                return (
                    <Comment name = {comment.name} comment = {comment.comment} />
                );
           })}    
        </div>

        // map 축약형
        // <div>
        //     {comments.map((item) => (
        //         <Comment
        //         name={item.name}
        //         comment={item.comment}
        //         />
        //     ))}
        // </div>

    );
}

export default CommentList;
