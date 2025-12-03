/* import React from 'react'
import Book from './ex01/Book'; */
import React, {useState} from 'react';
import Mycomponent from './ex01/Mycomponent';
import { AiFillCamera } from "react-icons/ai";

import './App.css'

function App() {
  
    let [blog, setBlog]=useState(['명품가방추천','명품신발추천','명품시계추천'])
   /* let [cnt, setCnt]=useState(0) */
   let [modal, setModal]=useState(false)
   let [title, setTitle]=useState(0)
   let [likes, setLikes]=useState(Array(blog.length).fill(0))
   let [input, setInput] =useState('')

   const setBlogLikes=(index, newLikes)=>{
      setLikes(prevLikes =>{
         const newLikesArray=[...prevLikes]
         newLikesArray[index]=newLikes;
         return newLikesArray;

        })
    }


  /* let post = '신림 맛집' */
  /* let [a, b] = useState('고기집 추천') */

  /* const name='seyeon'; */
  return (
    <>
    {/* <h1>{name}안녕</h1> */}
    {/* {
      name=='seyeon' ? (<h1>세연 반가워</h1>):(<h1>누구세요?</h1>) //name== 에 seyeon이 들어오면 세연반가워 다른애가들어오면 누구세요?
    }
    <Book /> */}
    <div className="App">
        <div className="black-nav">
            <h4><AiFillCamera />블로그 만들기</h4>
        </div>
        {/* <button onClick={()=>{
         let copy=[...blog];
         copy[0]='여름명품추천';
         setBlog(copy);
        }}>
         글수정
        </button>
         <button onClick={()=>{
         let copy=[...blog]
         copy.sort();
         setBlog(copy)
        }}>
         정렬하기
        </button> */}
        {/* <div className="list">
            <h4>{blog[0]}<span onClick={()=>{setCnt(cnt+1)}}>❤</span>{cnt}</h4>
            <p>2025 12 03 발행</p>
        </div>
        <div className="list">
            <h4>{blog[1]}<span onClick={()=>{setCnt(cnt+1)}}>❤</span>{cnt}</h4>
            <p>2025 12 03 발행</p>
        </div>
        <div className="list">
            <h4 onClick={()=>{setModal}}>{blog[2]}<span onClick={()=>{setCnt(cnt+1)}}>❤</span>{cnt}</h4>
            <p>2025 12 03 발행</p>
        </div> */}
        
        {
             blog.map(function(a, i){
            return (
               <div className="list">
                  <div className='blog'>
                      <h4  onClick={()=>{setModal(!modal); setTitle(i)}}>{blog[i]} </h4>
                      <span  onClick={()=>{setBlogLikes(i, likes[i] +1)}}>❤</span>{likes[i]}
                      <p>2025 12 03 발행</p>
                  </div>
                  <button
                     onClick={()=>{
                        let copy=[...blog];
                        copy.splice(i,1);
                        setBlog(copy)
                     }}
                  >삭제</button>
               </div>
            )
         })
      }
      <input value={input} onChange={(e)=>{setInput(e.target.value); console.log(input)}} placeholder='내용을 입력해주세요' />
        <button className='write'
            onClick={()=>{
                if(input.trim()===''){
                    alert('글을 입력해주세요');
                    return;
                }
                let copy=[...blog];
                copy.unshift(input)
                setBlog(copy)
                setInput("");
            }}
        >글쓰기</button>
        {
            modal===true ? <Modal blog={blog} title={title}/> :null
        }
    </div>
    </>
  )
}

function Modal({blog, title}){
    return(
        <div className="modal">
            <h2>{blog[title]}</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App
