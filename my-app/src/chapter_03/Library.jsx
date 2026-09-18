import Book from "./Book";


// < > 내용 안에 커서를 이동후 Alt+Shift+[아래방향키]를 누르면 자동 복사가 됨.
function Library(props) {
    return (
        <div>
            <Book name="처음 만난 Python" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 ReAct" numOfPage={500} />
            <Book name="다시 만난 FastAPI" numOfPage={200} />
            <Book name="다시 만난  Streamlit" numOfPage={100} />
            
            

        </div>
    );
}

export default Library;