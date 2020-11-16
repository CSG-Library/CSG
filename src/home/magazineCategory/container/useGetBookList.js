import { get } from '@u/http'

import { useState, useEffect } from 'react'

const useGetBookList = () => {
  const [result, setResult] = useState('')

  useEffect(() => {
    ;(async ()=>{
      let res = await get({
        url: "http://localhost:3000/api/findAllMagazineByTypeId"
      })
      setResult(result => (res.data.data))
    })()
  },[])

  return {
    bookList: result
  }
}

export default useGetBookList