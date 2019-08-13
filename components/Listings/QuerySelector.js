import React from 'react';
import {
  SafeAreaView,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import isEqual from 'lodash.isequal';

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

  render() {
    const { show, query } = this.state;
    return (
      <React.Fragment>
        <TouchableOpacity onPress={this.handleShowModal}>
          <Text>Show Filter</Text>
        </TouchableOpacity>
        <Modal visible={show} onRequestClose={this.handleHideModal}>
          <SafeAreaView>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.handleHideModal}>
                <Text style={styles.menuItem}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleSaveFilter}>
                <Text style={styles.menuItem}>Apply Filter</Text>
              </TouchableOpacity>
            </View>
            <Text>Query Selector Modal</Text>
          </SafeAreaView>
        </Modal>
      </React.Fragment>
    );
  }
}

const styles = {
  header: {}
};

