import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AutoComplete } from '../components/AutoComplete';
import * as AutoActions from '../actions'


export class AutoCompleteContainer extends Component {
  static propTypes = {
    prop: PropTypes
  }

}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AutoActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete)
