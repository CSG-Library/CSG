import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postC } from '@u/http'
import axios from 'axios';

const usePay = () => {
  const history = useHistory()
  console.log(history)
  const state = useSelector(state => state)
  const clickPayHandler = async() => {
    let selectList =  state.getIn(['shoppingCart']).shoppingCartList.filter(item => item.goods_checked_status)
    // console.log(selectList)
    let body = ''
    selectList.forEach(item => {
      body = body + " " + item.goods_name + "X" + item.goods_num
    })
    // console.log(body)
    let res = await postC({
      url: 'https://walter666.cn/wxpay/prepay',
      method: 'post',
      data: {
       out_trade_no: + new Date(),
       total_fee: 1,
       body,
       url: 'http://localhost:3000/home/browse'
     }
    })

    history.push('/pay')
    document.write(res.data)

  }
  return {
    clickPayHandler
  }
}

export default usePay