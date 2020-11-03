import React, { Component } from 'react'

import Head from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import Navone from '../../../components/navOne/NavOne'
import NavTwo from '../../../components/navTwo/NavTwo'

import Second from '../ui/Second'
export default class MyAccount extends Component {
  render() {
    return (
      <>
        <Head></Head>
        <main className='container'>
          <Navone></Navone>
          <NavTwo></NavTwo>
          <Second></Second>
        </main>
        <Footer></Footer>
      </>
    )
  }
}
