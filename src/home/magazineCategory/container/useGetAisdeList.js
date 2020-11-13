import { useSelector } from 'react-redux'

const useGetAisdeList = () => {
  const state = useSelector( state => state )
  const categoryCate = state.getIn(['magazineCategory', 'asideCate'])

  return {
    categoryCate
  }
}


export default useGetAisdeList