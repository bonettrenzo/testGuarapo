import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "expo-router"
import { useLocalSearchParams } from "expo-router";
import useCharacter from "@/hooks/useCharacter";



export default function App() {

    const navigation = useNavigation()
    const params = useLocalSearchParams();
    const { character, episodes, loading, error } = useCharacter(String(params.id));

    if (loading) return <Text style={{ fontSize: 20, color: "black", display: "flex", justifyContent: "center", alignItems: "center" }}>Loading...</Text>;
    if (error) return <Text>{error}</Text>;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                    <Text style={styles.backText}>GO BACK</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
                <View style={styles.profileSection}>
                    <Image
                        source={{
                            uri: `${character?.image}`,
                        }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>{`${character?.name}`}</Text>
                </View>

                {/* Information Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Informations</Text>

                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Gender</Text>
                        <Text style={styles.infoValue}>{`${character?.gender}`}</Text>
                    </View>

                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Status</Text>
                        <Text style={styles.infoValue}>{`${character?.status}`}</Text>
                    </View>

                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Specie</Text>
                        <Text style={styles.infoValue}>{`${character?.species}`}</Text>
                    </View>

                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Origin</Text>
                        <Text style={styles.infoValue}>{`${character?.origin.name}`}</Text>
                    </View>

                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Type</Text>
                        <Text style={styles.infoValue}>{`${character?.type ? character?.type : "Unknown"}`}</Text>
                    </View>

                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Location</Text>
                        <Text style={styles.infoValue}>{`${character?.location.name}`}</Text>
                    </View>
                </View>

                {/* Episodes Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Episodes</Text>

                    {Array.isArray(episodes) && episodes.map((item) => {
                        return <View key={item.episode} style={styles.episodeItem}>
                            <Text style={styles.episodeTitle}>{item.name}</Text>
                            <Text style={styles.episodeSubtitle}>{item.episode}</Text>
                            <Text style={styles.episodeDate}>{item.air_date}</Text>
                        </View>
                    })}


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        paddingHorizontal: 16,
        paddingVertical: 12

    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    backText: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: "500",
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 16,
    },
    profileSection: {
        alignItems: "center",
        paddingVertical: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 12,
    },
    profileName: {
        fontSize: 24,
        fontWeight: "bold",
    },
    section: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "500",
        color: "#666",
        marginBottom: 12,
    },
    infoItem: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 4,
    },
    infoValue: {
        fontSize: 14,
        color: "#666",
    },
    episodeItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
    },
    episodeTitle: {
        fontSize: 16,
        fontWeight: "500",
    },
    episodeSubtitle: {
        fontSize: 14,
        marginVertical: 2,
    },
    episodeDate: {
        fontSize: 12,
        color: "#999",
        textTransform: "uppercase",
    },
})
