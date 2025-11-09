"use client"

import React from 'react'
import { useFormStatus,useFormState } from 'react-dom'
import styles from "./photo-comments-form.module.css"
import EnviarIcon from '@/icons/enviar-icon';
import ErrorMessage from '../helper/error-message';
import commentPost from '@/actions/comment-post';
import { Comment } from '@/actions/photo-get';

function FormButton(){
  const{pending} = useFormStatus();
  return (
  <button type='submit' className={styles.button} disabled={pending}>
    <EnviarIcon />
  </button>
)
}

function PhotoCommentsForm({id,single,setComments}:{
  id: number,
  single: boolean,
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>
}) {

  const[state,action] = useFormState(commentPost,{
    ok:false,
    data: null,
    error: ""
  });

  const[comment,setComment] = React.useState("")

  React.useEffect(()=>{
    if(state.ok && state.data){
      setComments((comments) => [...comments,state.data])
      setComment("");
    }
  },[state,setComments])

  return (
      <form action={action} 
      className={`${styles.form} ${single ? styles.single : ""}`}>
        <input type="hidden" name='id' id='id' value={id} />
        <textarea 
          className={styles.textarea} 
          name="comment" id="comment"
          value={comment}
          onChange={({target})=> setComment(target.value)}
          placeholder='Comente...'>
        </textarea>
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
  )
}

export default PhotoCommentsForm
