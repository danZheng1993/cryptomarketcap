import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { fetchList, setQuery } from '../../store/actions/listActions';
import { getDataList, getQuery } from '../../store/selectors/list';

class Listings extends React.Component {
  componentDidMount() {
    this.props.fetchList();
  }
  render() {
    return <View />;
  }
}

const mapStateToProps = state => ({
  query: getQuery(state),
  data: getDataList(state),
});

const mapDispatchToProps = { fetchList, setQuery };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listings);
