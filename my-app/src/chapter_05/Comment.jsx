// 댓글 카드 스타일 작성 
const styles = {
    wrapper: {      // 일반적으로 둘러싸다란 의미의 wrapper 변수명을 많이 사용함.
        margin: 8, // 바깥여백
        padding: 8,  // 안여백
        display: 'flex', 
        flexDirection: 'row', // 아래로 한줄씩 추가
        border: '1px solid grey', // 테두리
        borderRadius: 16,  //테두리 모서리 둥글게

    },
    
    imageContainer: {},  // 존재만 할뿐 효과는 주지 않는다.
    
    image: {             // 이미지는 여러개가 존재 
        width: 50,  // 정사각형 가로 세로 동일
        height: 50,
        borderRadius: 25, // 테두리 모서리 둥글게
     },

    contentContainer: {
        marginLeft: 8,  //왼쪽 여백
        display: 'flex',
        flexDirection: 'column',  // 옆으로 추가
        justifyContent: 'center',  // 가운데 정렬
    },
    
    nameText: {
        color: 'white',     // 글자색
        fontSize: 16,       // 글자 크기
        fontWeight: 'bold', // 진하게
        textAlign: 'left',  // 왼쪽 정렬
    },
    
    commentText: {
        color: 'white',
        fontSize: 16,
    },
};

// 함수 정의
function Comment(props) {
    return (
        <div style={styles.wrapper}>             
            <div style={styles.imageContainer}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.image}
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>
                    {props.name}
                </span>

                <span style={styles.commentText}>
                    {props.comment}
                </span>
            </div>
        </div>
    );
}

export default Comment;