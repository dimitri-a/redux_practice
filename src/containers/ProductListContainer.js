import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {ProductList}     from '../components/ProductList'
import {receivedUsers} from '../actions/counterAction'

const blaat = (state) =>({
  products: state.products
})

const mapDispatchToProps = {
  receivedUsers
}


export default connect(blaat,mapDispatchToProps)(ProductList)