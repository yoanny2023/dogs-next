"use client"
import React from 'react'
import styles from "./Photo-comments.module.css";
import { useUser } from '@/context/user-context';
import { Comment } from '@/actions/photo-get';
import PhotoCommentsForm from './photo-comments-form';

const PhotoComments = (props: {
  id:number,
  single:boolean,
  comments: Comment[]
}) => {
  const{user} = useUser();
  const[comments,setComments] = React.useState(()=> props.comments);
  const commentsSection = React.useRef<HTMLUListElement>(null);

  React.useEffect(()=>{
    if(commentsSection.current){
       commentsSection.current.scrollTop = commentsSection.current.scrollHeight
    }
   
  },[comments])
  
  return (
    <>
      {<ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ""}`}>
        {comments.map((comment)=>(
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>}
      {user && (
        <PhotoCommentsForm 
        single={props.single} 
        id={props.id} 
        setComments={setComments}
     />)}
    </>
  )
}

export default PhotoComments
