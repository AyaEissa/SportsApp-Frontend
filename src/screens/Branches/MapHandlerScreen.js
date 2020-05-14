import React, { useState } from 'react';
import { View, StyleSheet, Switch,Text } from 'react-native';
import InteractiveMapScreen from './InteractiveMapScreen';
import StaticMapScreen from './StaticMapScreen';

const MapHandlerScreen = ({ navigation }) => {
    const [interactive, setInterActive] = useState(true);
    const marks = navigation.getParam('marks')
    return (
        <View style={styles.container}>
            <View style={styles.switchContainer}>
                <Text>Interactive : </Text>
                <Switch
                    value={interactive}
                    onValueChange={v => {
                        setInterActive(v);
                    }}
                />
            </View>
            <View style={styles.mapContainer}>

                {interactive ?
                    <InteractiveMapScreen marks={marks} /> :
                    <StaticMapScreen marks={marks} />
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    mapContainer: {
        height: '100%',
        width: '100%'
    },
    switchContainer: {
         flexDirection: 'row'
    }
});
export default MapHandlerScreen;