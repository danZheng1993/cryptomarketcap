import React from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import isEqual from 'lodash.isequal';

import Picker from '../common/Picker';

import cryptoTypes from '../../config/cryptoTypes.json';
import currencies from '../../config/currencies.json';
import sortDirOptions from '../../config/sortDirOptions.json';
import sortOptions from '../../config/sortOptions.json';

export default class QuerySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      query: props.query,
    };
  }

  componentDidUpdate(prevProps) {
    const { query } = this.props;
    if (!isEqual(prevProps.query, query)) {
      this.setState({ query });
    }
  }

  handleShowModal = () => {
    this.setState({ show: true });
  };

  handleHideModal = () => {
    this.setState({ show: false });
  };

  handleSaveFilter = () => {
    const { query } = this.state;
    this.props.onChange(query);
    this.setState({ show: false });
  };

  handleChange = field => (value) => {
    const { query } = this.state;
    if (field !== 'convert') {
      this.setState({ query: { ...query, [field]: value } });
    } else {
      this.setState({ query: { ...query, convert: [value] } });
    }
  }

  render() {
    const { show, query } = this.state;
    const { sort_dir, sort, convert, cryptocurrency_type } = query;
    return (
      <React.Fragment>
        <View style={styles.showButtonWrapper}>
          <TouchableOpacity onPress={this.handleShowModal}>
            <Text style={styles.headerButtonText}>Show Filter</Text>
          </TouchableOpacity>
        </View>
        <Modal
          visible={show}
          animationType="slide"
          onRequestClose={this.handleHideModal}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.handleHideModal}>
                <Text style={styles.headerButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleSaveFilter}>
                <Text style={styles.headerButtonText}>Apply Filter</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.body}>
              <Picker
                title="Cryptocurrency Type"
                selectedValue={cryptocurrency_type}
                options={cryptoTypes}
                onValueChange={this.handleChange('cryptocurrency_type')}
              />
              <Picker
                title="Convert"
                selectedValue={convert[0]}
                options={currencies}
                onValueChange={this.handleChange('convert')}
              />
              <Picker
                title="Sort By"
                selectedValue={sort}
                options={sortOptions}
                onValueChange={this.handleChange('sort')}
              />
              <Picker
                title="Sort Direction"
                selectedValue={sort_dir}
                options={sortDirOptions}
                onValueChange={this.handleChange('sort_dir')}
              />
            </View>
          </SafeAreaView>
        </Modal>
      </React.Fragment>
    );
  }
}

const styles = {
  showButtonWrapper: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerButtonText: {
    padding: 16,
    textDecorationLine: 'underline',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
  }
};
