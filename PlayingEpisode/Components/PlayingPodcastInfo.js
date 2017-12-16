import React from 'react';
import { View,Text,Image } from 'react-native';
import PropTypes from 'prop-types'

export default class PlayingPodcastInfo extends React.Component {
    render() {
        return(
        <View style={this.props.style.container}>
            <Image style={this.props.style.img} source={{uri:this.props.podcastArt}}/>
            <Text> {this.props.episodeTitle}</Text>
            <Text> {this.props.podcastTitle}</Text>
        </View>
        )
    }
}

PlayingPodcastInfo.PropTypes = {
    artFilePath:PropTypes.string,
    episodeTitle:PropTypes.string,
    podcastTitle:PropTypes.string,
}