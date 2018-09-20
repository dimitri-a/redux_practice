import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {ProductList}     from '../components/ProductList'
import * as actions from '../actions/counterAction'

const blaat = (state) =>({
  products: state.products
})

export default connect(blaat,actions)(ProductList)