import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native';

import { fetchList, setQuery } from '../../store/actions/listActions';
import {
  getDataList,
  getQuery,
  getListState,
} from '../../store/selectors/list';

import QuerySelector from './QuerySelector';
import LatestList from './LatestList';

class Listings extends React.Component {
  componentDidMount() {
    this.props.fetchList();
  }

  handleQueryChange = query => {
    this.props.setQuery(query);
  };

  handleLoadMore = () => {
    console.log('loadMore');
    this.props.fetchList();
  };

  render() {
    const { data, currentState, query, error } = this.props;
    return (
      <SafeAreaView>
        <QuerySelector query={query} onChange={this.handleQueryChange} />
        <LatestList
          data={data}
          currentState={currentState}
          error={error}
          onLoadMore={this.handleLoadMore}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  query: getQuery(state),
  data: getDataList(state),
  currentState: getListState(state),
  error: state.list.error,
});

const mapDispatchToProps = { fetchList, setQuery };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listings);
