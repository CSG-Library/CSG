import { get } from '@u/http'

import { useState, useEffect } from 'react'

const useGetBookList = () => {
  const [result, setResult] = useState('')

  useEffect(() => {
    ;(async ()=>{
      let res = await get({
        url: "/api/findAllMagazineByTypeId"
      })
      setResult(result => (res.data.data))
    })()
  },[])

  return {
    bookList: result
  }
}

export default useGetBookList