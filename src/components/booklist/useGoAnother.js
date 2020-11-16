import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const useGoAnother = () => {
   let history = useHistory()

   const GoDetClick = useCallback(() => {
      return () => {
         history.push("/home/magazinedet")
      }
   }, [history])

   const GoCommentClick = useCallback(() => {
      return () => {
         history.push('/home/comment')
      }
   }, [history])

   return {
      GoCommentClick,
      GoDetClick
   }
}

export default useGoAnother