import {Text, View, StyleSheet, SafeAreaView, Platform} from "react-native";
import {Button, Icon} from 'react-native-elements';
import {router} from 'expo-router';
import FontAwesomeIcon from "react-native-vector-icons";

import ButtonList from "@/components/ButtonList";
import ButtonTab from "@/components/ButtonTab";
import colors from "@/config/Colors";
import fonts from "@/config/Fonts";

export default function Stop() {
return (
    <SafeAreaView
        style={styles.background}
    >
        {/* Chosen bus stop */}
        <View style={styles.stop}>
            <Button
                icon={<Icon iconStyle={styles.icon} name="chevron-left" type="font-awesome"/>}
                buttonStyle={styles.button}
                onPress={() => router.push("/screens/map")}
                >

            </Button>
            <View style={styles.heading}>
                <Text style={styles.textPrimary}>Stop 2232 University College, Cork</Text>
            </View>
            {/* to be made functional once we store favourites */}
            <Button                
                icon={<Icon iconStyle={styles.icon} name="star" type="font-awesome"/>}
                buttonStyle={styles.button}
                onPress={() => alert("favs")}
            >

            </Button>

        </View>

        {/* Description part */}
        <View style={styles.description}>
            <Text style={styles.textDescription}>Route</Text>
            <Text style={styles.textDescription}>Direction</Text>
            <Text style={styles.textDescription}>Departs</Text>
        </View>

        {/* Display each bus at selected bus stop here, make scrollView, bare bones given below */}
        <View style={styles.bus}>
            <Text style={styles.textSecondary}>220</Text>
            <Text style={styles.textSecondary}>Fort Camden</Text>
            <Text style={styles.textSecondary}>6 mins</Text>
        </View>
        <View style={styles.bus}>
            <Text style={styles.textSecondary}>214</Text>
            <Text style={styles.textSecondary}>Glanmire</Text>
            <Text style={styles.textSecondary}>12 mins</Text>
        </View>


        <ButtonTab />
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
    background: {
        // paddingTop: Platform.OS === 'android' ? 20 : 0,
        paddingTop: 20,
        flex: 1,
        // justifyContent: 'flex-end',
        backgroundColor: colors.backgroundPrimary,
        // height: '100%'
    },
    stop: {
        flexDirection: 'row',
        height: '10%',
        width: '100%',
        backgroundColor: colors.backgroundPrimary,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    heading: {
        color: colors.textPrimary,
        flexGrow: 4,
        flexDirection: 'column',
        fontSize: fonts.heading,
    },
    button: {
        flexGrow: 1,
        color: colors.backgroundPrimary,
        backgroundColor: colors.backgroundPrimary,
    },
    icon: {
        color: colors.textPrimary,
    },
    textPrimary: {
        padding: 7,
        textAlign: 'left',
        fontSize: fonts.heading,
        color: colors.textPrimary
    },
    textSecondary: {
        color: colors.textPrimary,
        fontSize: fonts.subHeading,
    },
    textDescription: {
        color: colors.textSecondary,
        fontSize: fonts.body,
    },
    description: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    bus: {
        justifyContent: 'space-evenly',
        flexDirection: 'row', 
    }
});