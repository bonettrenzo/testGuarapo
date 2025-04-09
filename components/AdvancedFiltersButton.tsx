import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

interface AdvancedFiltersButtonProps {
  onPress: () => void
}

const AdvancedFiltersButton = ({ onPress }: AdvancedFiltersButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <Feather name="filter" size={18} color="#3B82F6" style={styles.icon} />
      <Text style={styles.text}>ADVANCED FILTERS</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3f3fc",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: "100%",
  },
  icon: {
    marginRight: 8,
  },
  text: {
    color: "#3B82F6",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
})

export default AdvancedFiltersButton
