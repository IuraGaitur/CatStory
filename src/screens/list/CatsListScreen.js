import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Footer from "./Footer";

export default class CatsListScreen extends Component {

    currentPage = 0;
    pageSize = 20;

    constructor(props) {
        super(props);
        this.state = {movies: []};
    }

    componentDidMount() {
        this.loadInitialItems()
    }

    async loadInitialItems = () => {
        //let data = await this.loadMoreData(0, this.pageSize);
        this.currentPage++;
        this.setState({movies: data});
    };

    async actionRefresh = () => {
        //let data = await this.loadMoreData(this.currentPage, this.pageSize);
        this.setState({movies: data});
    };

    async loadMoreData = (page, pageSize) => {
        // try {
        //     let response = await fetch(
        //         'https://facebook.github.io/react-native/movies.json',
        //     );
        //     let responseJson = await response.json();
        //     return responseJson.movies;
        // } catch (error) {
        //     console.error(error);
        // }
    };

    render() {
        return (
          <View>
              <FlatList
                  FooterComponent={Footer}
                  data={this.state.movies}
                  onRefresh={this.actionRefresh}
                  refreshing={false}
                  renderItem={this._renderItemComponent}
                  onEndReachedThreshold={1}
                  onEndReached={({ distanceFromEnd }) => {
                        console.log('on end reached ', distanceFromEnd)
                  }}
              />
          </View>
        );
    }
}