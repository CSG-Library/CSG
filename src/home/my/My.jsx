import React, { Component } from 'react'
import Head from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Navone from '../../components/navOne/NavOne'
import NavTwo from '../../components/navTwo/NavTwo'


import MyBox from './container/MyBook'

export default class My extends Component {
  render() {
    return (
      <>
        <Head></Head>
        <main className='container'>
          <Navone></Navone>
          <NavTwo></NavTwo>
          <MyAccount></MyAccount>
        </main>
        <Footer></Footer>
      </>
    )
  }
}
