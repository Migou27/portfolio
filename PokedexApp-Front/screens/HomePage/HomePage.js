import React, { useEffect, useState, useRef } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image, TextInput } from 'react-native';
import { Image as RNImage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import styles from './HomePage.styles';
import config from '../../config';
import paths from '../../assets/importImages';
import AsyncStorage from '@react-native-async-storage/async-storage';

const typeColors = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC'
};

const getTypeIcon = (type) => {
  return paths.typeIcons[type.toLowerCase()] || null;
};

const getCardColors = (types) => {
  if (!types || types.length === 0) {
    return [typeColors.normal, typeColors.normal];
  }
  if (types.length === 1) {
    const color = typeColors[types[0].toLowerCase()] || typeColors.normal;
    return [color, color];
  }
  const color1 = typeColors[types[0].toLowerCase()] || typeColors.normal;
  const color2 = typeColors[types[1].toLowerCase()] || typeColors.normal;
  return [color1, color2];
};

export default function HomeScreen({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  const [displayedPokemons, setDisplayedPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [search, setSearch] = useState(''); // <-- Add search state
  const flatListRef = useRef(null);
  const PAGE_SIZE = 10;

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(`${config.apiUrl}/api/Pokemons`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPokemons(response.data);
        setLoading(false);
      } catch (error) {
        console.error('API Error:', error);
        setError('Failed to load Pokémon data');
        setLoading(false);
      }
    };
  
    fetchPokemons();
  }, []);

  const filteredPokemons = React.useMemo(() => {
    if (search.trim() === '') return pokemons;
    return pokemons.filter(p =>
      p.name.toLowerCase().startsWith(search.trim().toLowerCase())
    );
  }, [pokemons, search]);

  useEffect(() => {
    setDisplayedPokemons(filteredPokemons.slice(0, page * PAGE_SIZE));
  }, [filteredPokemons, page]);

  const handlePokemonPress = (pokemon) => {
    navigation.navigate('PokemonDetail', { pokemonName: pokemon.name });
  };

  const handleLoadMore = () => {
    if (displayedPokemons.length < filteredPokemons.length && !loadingMore) {
      setLoadingMore(true);
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setLoadingMore(false);
      }, 500);
    }
  };

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowScrollTop(offsetY > 200);
  };

  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  };

  const renderFooter = () => {
    if (!loadingMore) return null;
    return (
      <View style={{ paddingVertical: 16 }}>
        <ActivityIndicator size="small" color="#888" />
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#888" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search pokémons..."
        value={search}
        onChangeText={text => {
          setSearch(text);
          setPage(1);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
      <FlatList
        ref={flatListRef}
        data={displayedPokemons}
        keyExtractor={item => item.name}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => {
          const cardColors = getCardColors(item.types);
          return (
            <TouchableOpacity
              onPress={() => handlePokemonPress(item)}
              activeOpacity={0.7}
              style={{ borderRadius: 12, marginBottom: 12, overflow: 'hidden' }}
            >
              <LinearGradient
                colors={cardColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.card}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.typesContainer}>
                      {item.types && item.types.map((type, index) => (
                        <View key={index} style={{ marginRight: 4 }}>
                          <RNImage
                            source={getTypeIcon(type)}
                            style={{ width: 75, height: 16 }}
                            resizeMode="contain"
                          />
                        </View>
                      ))}
                    </View>
                  </View>
                  {item.sprite_front_default && (
                    <Image
                      source={{ uri: item.sprite_front_default }}
                      style={{ width: 56, height: 56, marginLeft: 8 }}
                      resizeMode="contain"
                    />
                  )}
                </View>
              </LinearGradient>
            </TouchableOpacity>
          );
        }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      {showScrollTop && (
        <TouchableOpacity
          style={styles.scrollTopButton}
          onPress={scrollToTop}
          activeOpacity={0.8}
        >
          <Text style={styles.scrollTopButtonText}>Haut de page</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}