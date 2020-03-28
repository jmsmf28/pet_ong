import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop:48,
        color: '#13131a',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    description: {
        fontSize: 11,
        fontWeight: 'bold',
        lineHeight:24,
        color: '#737380',
        marginBottom: 12,
    },

    incidentList: {
        marginTop: 32,
    },

    incident:  {
        padding: 20,
        paddingBottom: 12,
        paddingTop: 12,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 12,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 4,
        fontSize: 15,
        marginBottom: 18,
        color: '#737380',
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 12,
        fontWeight: 'bold',
    }
});