import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Library  from './chapter_03/Library';
import Clock  from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommentList />
  </StrictMode>,
)

// 실행 명령  터미널에서 :  (최초 1회 실행)
// (최초 1회 실행) :npm create vite@latest my-app -- --template react  --> 자동으로 cd my-app이 실행되면서 폴더 이동이 됨
// (2회부터 실행) : npm run dev  --> 폴더의 위치가 /Recat/my-app
// 차후에 새로운 폴더에서 새로운 작업을 시행하면  최초 1회부터 다시해야함. 폴더 네임 변경(my-app)
