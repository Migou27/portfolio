import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import config from '../../config';
import styles from './PokemonDetail.styles'
import StatCalculator from '../../components/StatCalculator';
import { Image as RNImage } from 'react-native';
import paths from '../../assets/importImages';
import MovesDisplayer from '../../components/MovesDisplayer/MovesDisplayer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getTypeIcon = (type) => {
  return paths.typeIcons[type?.toLowerCase()] || null;
};

const getClassIcon = (moveClass) => {
  return paths.classIcons[moveClass?.toLowerCase()] || null;
};

export default function PokemonDetailScreen({ route, navigation }) {
  const { pokemonName } = route.params;
  const [pokemon, setPokemon] = useState(null);
  const [forms, setForms] = useState([]);
  const [moves, setMoves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movesLoading, setMovesLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movesCollapsed, setMovesCollapsed] = useState(true);
  const [activeTab, setActiveTab] = useState('base');

  

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const pokemonResponse = await axios.get(`${config.apiUrl}/api/pokemons/${pokemonName}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPokemon(pokemonResponse.data);
  
        const formsResponse = await axios.get(`${config.apiUrl}/api/pokemons/${pokemonName}/forms`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setForms(formsResponse.data || []);
  
        setLoading(false);
      } catch (error) {
        console.error('API Error:', error);
        setError('Failed to load Pokémon details');
        setLoading(false);
      }
    };
  
    fetchPokemonData();
  }, [pokemonName]);

  useEffect(() => {
    const fetchMoves = async () => {
      setMovesLoading(true);
      try {
        const token = await AsyncStorage.getItem('token');
        const movesResponse = await axios.get(`${config.apiUrl}/api/moves/pokemon/${pokemonName}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMoves(movesResponse.data || []);
      } catch (error) {
        setMoves([]);
      }
      setMovesLoading(false);
    };
    fetchMoves();
  }, [pokemonName]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#888" />
      </View>
    );
  }

  if (error || !pokemon) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error || 'Pokemon not found'}</Text>
      </View>
    );
  }
  const pokemonBaseStats = {
    Hp: pokemon.stats.find(s => s.name === 'hp')?.base_stat || 0,
    Atk: pokemon.stats.find(s => s.name === 'attack')?.base_stat || 0,
    Def: pokemon.stats.find(s => s.name === 'defense')?.base_stat || 0,
    Spa: pokemon.stats.find(s => s.name === 'special-attack')?.base_stat || 0,
    SpDef: pokemon.stats.find(s => s.name === 'special-defense')?.base_stat || 0,
    Spd: pokemon.stats.find(s => s.name === 'speed')?.base_stat || 0,
  };
  const getShinySpriteUrl = (defaultSprite) => {
    if (!defaultSprite) return null;
    return defaultSprite.replace('/sprites/pokemon/', '/sprites/pokemon/shiny/');
  };

  const formatStatName = (statName) => {
    if (!statName) return '';
    return statName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const formatName = (name) => {
    if (!name) return '';
    return name.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const handleFormPress = (formName) => {
    navigation.navigate('PokemonDetail', { pokemonName: formName });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header with ID and Name */}
      <View style={styles.header}>
        <Text style={styles.id}>#{pokemon._id || 'N/A'}</Text>
        <Text style={styles.name}>{formatName(pokemon.name)}</Text>
      </View>

      {/* Sprites */}
      <View style={styles.spriteContainer}>
        <View style={styles.spriteSection}>
          <Text style={styles.spriteLabel}>Normal</Text>
          <Image
            source={{ uri: pokemon.sprite_front_default }}
            style={styles.sprite}
            resizeMode="contain"
          />
        </View>
        <View style={styles.spriteSection}>
          <Text style={styles.spriteLabel}>Shiny</Text>
          <Image
            source={{ uri: getShinySpriteUrl(pokemon.sprite_front_default) }}
            style={styles.sprite}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Basic Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Height:</Text>
          <Text style={styles.infoValue}>{pokemon.height ? `${pokemon.height / 10}m` : 'N/A'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Weight:</Text>
          <Text style={styles.infoValue}>{pokemon.weight ? `${pokemon.weight / 10}kg` : 'N/A'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Types:</Text>
          <View style={styles.typesContainer}>
          {pokemon.types && pokemon.types.length > 0
            ? pokemon.types.map((type, idx) => (
              <View key={idx} style={{ marginRight: 4 }}>
                <RNImage
                  source={getTypeIcon(type)}
                  style={{ width: 75, height: 32 }}
                  resizeMode="contain"
                />
              </View>
            ))
          : <Text style={styles.infoValue}>N/A</Text>
          }
          </View>
        </View>
      </View>

      {/* Abilities */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Abilities</Text>
        {pokemon.abilities && pokemon.abilities.length > 0 ? (
          pokemon.abilities.map((ability, index) => (
            <View key={index} style={styles.abilityRow}>
              <Text style={styles.abilityName}>
                {formatName(ability.name)}
              </Text>
              {ability.is_hidden && (
                <Text style={styles.hiddenAbility}>(Hidden Ability)</Text>
              )}
            </View>
          ))
        ) : (
          <Text style={styles.noData}>No abilities available</Text>
        )}
      </View>

      {/* Tab Headers */}
      <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'base' && styles.activeTabButton
            ]}
            onPress={() => setActiveTab('base')}
          >
            <Text style={[
              styles.tabText,
              activeTab === 'base' && styles.activeTabText
            ]}>
              Base Stats
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'calculator' && styles.activeTabButton
            ]}
            onPress={() => setActiveTab('calculator')}
          >
            <Text style={[
              styles.tabText,
              activeTab === 'calculator' && styles.activeTabText
            ]}>
              Calculator
            </Text>
          </TouchableOpacity>
        </View>
        {/* Tab Content */}
        {activeTab === 'base' ? (
          <View style={styles.tabContent}>
            {pokemon.stats && pokemon.stats.length > 0 ? (
              pokemon.stats.map((stat, index) => (
                <View key={index} style={styles.statRow}>
                  <Text style={styles.statName}>{formatStatName(stat.name)}</Text>
                  <View style={styles.statBarContainer}>
                    <View 
                      style={[
                        styles.statBar, 
                        { width: `${(stat.base_stat / 255) * 100}%` }
                      ]} 
                    />
                  </View>
                  <Text style={styles.statValue}>{stat.base_stat}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.noData}>No stats available</Text>
            )}
          </View>
        ) : (
          <View style={styles.tabContent}>
            <StatCalculator 
              baseStats={pokemonBaseStats} 
              pokemonName={pokemon.name} 
            />
          </View>
        )}

      {/* Moves */}
      <View style={styles.section}>
        <TouchableOpacity
          onPress={() => setMovesCollapsed(!movesCollapsed)}
          style={styles.sectionHeaderTouchable}
          activeOpacity={0.7}
        >
          <Text style={styles.sectionTitle}>
            Moves {movesCollapsed ? '▼' : '▲'}
          </Text>
        </TouchableOpacity>
        {!movesCollapsed && (
          movesLoading ? (
            <ActivityIndicator size="small" color="#888" />
          ) : moves.length === 0 ? (
            <Text style={styles.noData}>No moves available</Text>
          ) : (
              <MovesDisplayer
                key={moves.id}
                moves={moves}
                getTypeIcon={getTypeIcon}
                getClassIcon={getClassIcon}
              />
          )
        )}
      </View>

      {/* Forms */}
      {forms && forms.length > 0 && forms.some(form => form.name !== pokemon.name) && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Forms</Text>
          <View style={styles.formsContainer}>
            {forms
              .filter(form => form.name !== pokemon.name)
              .map((form, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.formCard}
                  onPress={() => handleFormPress(form.name)}
                  activeOpacity={0.7}
                >
                  <Image
                    source={{ uri: form.sprite_front_default }}
                    style={styles.formSprite}
                    resizeMode="contain"
                  />
                  <Text style={styles.formName}>{formatName(form.name)}</Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
}