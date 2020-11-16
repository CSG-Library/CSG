import { useCallback } from 'react';
// import { useHistory } from 'react-router-dom';
import { actionCreator as acr } from '@h/my';
import { actionCreator as ac } from '@h/shoppingCart';
import { useDispatch, useSelector } from 'react-redux';

const useAddSome = () => {
   // let history = useHistory()
   const shoppingCartList = useSelector(state => state.getIn(['shoppingCart', 'shoppingCartList']))
   // console.log(shoppingCartList)
   const dispatch = useDispatch()

   const AddShelf = useCallback((v) => {
      return () => {
         // console.log(v);
         let bookObj = {
            book_id: v.book_id,
            book_name: v.book_name,
            book_img: v.book_img,
            book_date: v.book_date,
            book_statu: false,
            book_finish: v.book_finish,
            book_num: v.book_num
         }

         dispatch(acr.addBookShelf(bookObj))
      }
   }, [dispatch])

   const AddRecommen = useCallback(() => {
      // return () => {
      //    history.push('/home/comment')
      // }
   }, [])

   const AddShoppingCart = useCallback((v) => {
      return () => {
         console.log(v);
         let objCart = {
            goods_id: v.book_id,
            goods_num: 1,
            goods_details: v.book_info.substr(0, 21),
            goods_price: v.book_price,
            goods_checked_status: false,
            goods_img: v.book_img,
            goods_name: v.book_name
         }

         dispatch(ac.addShoppingCart(objCart))
      }
   }, [dispatch])

   return {
      AddShelf,
      AddRecommen,
      AddShoppingCart
   }
}

export default useAddSome