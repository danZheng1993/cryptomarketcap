import React from 'react';
import { Animated, FlatList, Text, View, TouchableOpacity } from 'react-native';
import get from 'lodash.get';

export default class Information extends React.Component {
  state = { showQuotes: false };

  anival = new Animated.Value(0);

  showQuotes = () => {
    this.setState({ showQuotes: true }, () => {
      Animated.timing(this.anival, {
        toValue: 1,
        duration: 200,
      }).start();
    });
  };

  hideQuotes = () => {
    Animated.timing(this.anival, {
      toValue: 0,
      duration: 200,
    }).start(() => {
      this.setState({ showQuotes: false });
    });
  };

  renderQuote = ({ item: currency }) => {
    const { data } = this.props;
    const { price, market_cap } = get(data, `quote.${currency}`);
    return (
      <View style={styles.quoteWrapper}>
        <Text style={styles.quoteCurrency}>- {currency}</Text>
        <Text style={styles.quoteInfo}>Price: ${price}</Text>
        <Text style={styles.quoteInfo}>Market Cap: ${market_cap}</Text>
      </View>
    );
  };

  render() {
    const { showQuotes } = this.state;
    const { data } = this.props;
    const {
      quote,
      symbol,
      name,
      cmc_rank,
      num_market_pairs,
      circulating_supply,
      total_supply,
      tags
    } = data;
    const currencies = Object.keys(quote);
    return (
      <View style={styles.wrapper}>
        <Animated.View
          style={[
            styles.content,
            {
              height: this.anival.interpolate({
                inputRange: [0, 1],
                outputRange: [136, 136 + 60 * currencies.length]
              })
            }
          ]}
        >
          <View style={styles.mainInfoWrapper}>
            <Text style={styles.coinName}>
              {name}: {symbol}
            </Text>
            <Text style={styles.mainInfoDetail}>Rank: {cmc_rank}</Text>
            <Text style={styles.mainInfoDetail}>Market Pair: {num_market_pairs}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailInfo}>
              Circulating Supply: {circulating_supply}
            </Text>
            <Text style={styles.detailInfo}>Total Supply: {total_supply}</Text>
            <Text style={styles.detailInfo}>Tags: {tags.join(', ')}</Text>
          </View>
          <View style={styles.moreWrapper}>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={showQuotes ? this.hideQuotes : this.showQuotes}
            >
              <Text style={styles.buttonText}>
                {showQuotes ? 'Hide Quotes' : 'Show Quotes'}
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={currencies}
            keyExtractor={item => `quote_${item}`}
            renderItem={this.renderQuote}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: 'rgba(213, 213, 213, 0.8)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 1
  },
  content: {
    overflow: 'hidden'
  },
  coinName: {
    fontSize: 14,
  },
  mainInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  coinName: {
    width: '100%',
    fontSize: 16,
    marginBottom: 8,
  },
  mainInfoDetail: {
    fontSize: 14,
    width: 100,
    marginLeft: 8,
    color: '#666666',
  },
  details: {
    marginBottom: 4,
  },
  detailInfo: {
    fontSize: 14,
    marginBottom: 4,
  },
  quoteWrapper: {
    marginVertical: 4,
    paddingHorizontal: 8,
  },
  quoteInfo: {
    marginLeft: 10,
  }
};
