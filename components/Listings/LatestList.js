import React from 'react';
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import Information from './Information';

export default class LatestList extends React.Component {
  handleLoadMore = () => {
    const { currentState, onLoadMore } = this.props;
    if (currentState === 'showing') {
      onLoadMore();
    }
  };

  keyExtractor = item => `item_${item.id}`;

  renderItem = ({ item }) => <Information data={item} />;

  renderEmptyState = () => {
    const { error, currentState } = this.props;
    return currentState === 'loading' ? (
      <View style={styles.emptyState}>
        <Text style={styles.emptyStateText}>Loading...</Text>
      </View>
    ) : (
      <View style={styles.emptyState}>
        <Text style={styles.emptyStateText}>{error}</Text>
      </View>
    );
  };

  renderFooterComponent = () => {
    const { error, currentState, onLoadMore } = this.props;
    if (currentState === 'appending') {
      return (
        <View style={styles.listFooter}>
          <ActivityIndicator size="small" />
        </View>
      );
    } else {
      if (currentState === 'showing' || currentState === 'loading') {
        return false;
      }
      return (
        <View style={styles.listFooter}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity onPress={onLoadMore}>
            <Text style={styles.reload}>Reload</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        ListEmptyComponent={this.renderEmptyState}
        ListFooterComponent={this.renderFooterComponent}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={0.9}
      />
    );
  }
}

const styles = {
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateText: {
    fontSize: 16,
  }
};
