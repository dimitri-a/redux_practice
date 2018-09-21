import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {ProductList}     from '../components/ProductList'
import {receivedUsers} from '../actions/counterAction'
import { bindActionCreators } from 'redux'

const blaat = (state) =>({
  products: state.products
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    receivedUsers
  },
  dispatch,
)

export default connect(blaat,mapDispatchToProps)(ProductList)