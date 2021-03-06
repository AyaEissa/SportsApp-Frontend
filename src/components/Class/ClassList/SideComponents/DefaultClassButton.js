import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Heart from '../../../../../assets/images/svg/heart.svg'
import Hearto from '../../../../../assets/images/svg/hearto.svg'
import Plus from '../../../../../assets/images/svg/plus.svg'
import LoadingModal from '../../../global/LoadingModal'
import { toggleLikeState } from '../../../../utils/ClassUtils';
import { useNavigation } from 'react-navigation-hooks';
const DefaultClassButton = ({ classItem, refresh }) => {

    const { navigate } = useNavigation();
    const nav = () => {
        navigate('ClassDescriptionScreen', { id: classItem._id });
    }

    const [loading, setLoading] = useState(false);
    const handleLikePressed = async () => {
        setLoading(true);
        await toggleLikeState(classItem._id, classItem.isLiked).then(
            () => {
                refresh();
            }
        )
        setLoading(false)
    }
    return (
        <View style={styles.svgContainer}>
            <LoadingModal modalVisible={loading} />
            <TouchableOpacity onPress={() => { nav() }}>

                <Plus height={styles.svg.height} width={styles.svg.width} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                handleLikePressed();
            }}>
                {
                    classItem.isLiked ?
                        <Heart height={styles.svg.height} width={styles.svg.width} />
                        : <Hearto height={styles.svg.height} width={styles.svg.width} />
                }
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    svgContainer: {
        width: 50,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 5
    },
    svg: {
        width: 20,
        height: 20,
    }
});

export default DefaultClassButton;