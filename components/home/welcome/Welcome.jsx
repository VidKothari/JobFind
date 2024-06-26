import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { COLORS, icons, images, SIZES } from '../../../constants'

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState("Full-time")
  return (
    <View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.userName}>Hello Vidit</Text>
        <Text style={styles.welcomeText}>Find your dream job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} placeholder='What are you looking for?' 
          value = {searchTerm} onChangeText={(text) => {setSearchTerm(text)}}  />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <FlatList data={jobTypes} renderItem={({ item }) => (
          <TouchableOpacity
          style={styles.tab(activeJobType, item)}
          onPress={() => {
            setActiveJobType(item);
            router.push(`/search/${item}`)
          }}>
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small }}
        horizontal 
        />
      </View>

    </View>
  )
}

export default Welcome