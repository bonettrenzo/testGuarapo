import { View, TextInput, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

interface SearchInputProps {
    placeholder?: string
    value: string
    onChangeText: (text: string) => void
  }

  const SearchInput = ({ placeholder = "Filter by name...", value, onChangeText }: SearchInputProps) => {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Feather name="search" size={18} color="#9CA3AF" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF"
            value={value}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 1,
      width: "100%",
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#808080",
      borderRadius: 8,
      backgroundColor: "#FFFFFF",
      paddingHorizontal: 12,
      
      height: 44,
    },
    searchIcon: {
      marginRight: 8,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: "#1F2937",
      height: "100%",
      paddingVertical: 100,
    },
  })
  
  export default SearchInput