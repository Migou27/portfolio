import React, { useEffect, useState, useRef } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import axios from 'axios';
import config from '../../config';
import styles from './MovesList.styles';
import TypeFilterModal from '../../Modals/TypeFilterModal/TypeFilterModal';
import MoveDetailsModal from '../../Modals/MoveDetails/MoveDetailsModal';
import paths from '../../assets/importImages';
import { Image as RNImage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MOVE_TYPES = [
  'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying',
  'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
];

const getTypeIcon = (type) => {
  return paths.typeIcons[type.toLowerCase()] || null;
};

const getClassIcon = (moveClass) => {
  return paths.classIcons[moveClass?.toLowerCase()] || null;
};


export default function MovesList() {
  const [moves, setMoves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortMode, setSortMode] = useState('name');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 10;
  const [loadingMore, setLoadingMore] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const flatListRef = useRef(null);
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMove, setSelectedMove] = useState(null);
  const [moveImages, setMoveImages] = useState([]);
  const [modalLoading, setModalLoading] = useState(false);

  const filteredMoves = React.useMemo(() => {
    let result = moves;
    if (selectedTypes.length > 0) {
      result = result.filter(move =>
        move.type && selectedTypes.includes(move.type.toLowerCase())
      );
    }
    if (search.trim() !== '') {
      result = result.filter(move => move.name.toLowerCase().startsWith(search.trim().toLowerCase()));
    }
    if (sortMode === 'power') {
      result = result.slice().sort((a, b) => {
        if (a.power == null && b.power == null) return a.name.localeCompare(b.name);
        if (a.power == null) return 1;
        if (b.power == null) return -1;
        if (b.power === a.power) return a.name.localeCompare(b.name);
        return b.power - a.power;
      });
    } else {
      result = result.slice().sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }, [moves, selectedTypes, sortMode, search]);

  const openMoveModal = React.useCallback((move) => {
    setSelectedMove(move);
    setModalLoading(true);
    setTimeout(() => {
      setMoveImages([
        'https://via.placeholder.com/150/FF0000/FFFFFF?text=Move+Image+1',
        'https://via.placeholder.com/150/00FF00/FFFFFF?text=Move+Image+2',
        'https://via.placeholder.com/150/0000FF/FFFFFF?text=Move+Image+3',
      ]);
      setModalLoading(false);
      setIsModalVisible(true);
    }, 300);
  }, []);

  const closeMoveModal = React.useCallback(() => {
    setIsModalVisible(false);
    setSelectedMove(null);
    setMoveImages([]);
    setModalLoading(false);
  }, []);

  const paginatedMoves = filteredMoves.slice(0, page * PAGE_SIZE);

  useEffect(() => {
    const fetchMoves = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(`${config.apiUrl}/api/moves`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const sortedMoves = response.data.sort((a, b) => a.name.localeCompare(b.name));
        setMoves(sortedMoves);
        setLoading(false);
      } catch (error) {
        setError('Failed to load moves');
        setLoading(false);
      }
    };
  
    fetchMoves();
  }, []);

  const handleSortByName = () => {
    setSortMode('name');
    setPage(1);
  };

  const handleSortByPower = () => {
    setSortMode('power');
    setPage(1);
  };

  const handleTypeFilter = (type) => {
    setSelectedTypes(prev => {
      if (prev.includes(type)) {
        // Remove type
        return prev.filter(t => t !== type);
      } else {
        // Add type
        return [...prev, type];
      }
    });
    setPage(1); // Reset pagination on filter change
  };

  const handleClearFilters = () => {
    setSelectedTypes([]);
    setPage(1);
  };

  const handleSearch = (text) => {
    setSearch(text);
    setPage(1); // Reset pagination on search change
  };

  const handleLoadMore = () => {
    if (paginatedMoves.length < filteredMoves.length && !loadingMore) {
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
        placeholder="Search moves..."
        value={search}
        onChangeText={handleSearch}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 8 }}>
        <TouchableOpacity
          style={[styles.sortButton, sortMode === 'name' && { backgroundColor: '#2851a3' }]}
          onPress={handleSortByName}
        >
          <Text style={styles.sortButtonText}>Sort by Name</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sortButton, sortMode === 'power' && { backgroundColor: '#2851a3', marginLeft: 8 }]}
          onPress={handleSortByPower}
        >
          <Text style={styles.sortButtonText}>Sort by Power</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 8 }}>
        <TouchableOpacity
          style={[styles.sortButton]}
          onPress={() => setFilterModalVisible(true)}
        >
          <Text style={styles.sortButtonText}>Filter by Type</Text>
        </TouchableOpacity>
      </View>
      <TypeFilterModal
        visible={filterModalVisible}
        types={MOVE_TYPES}
        selectedTypes={selectedTypes}
        onSelect={handleTypeFilter}
        onClear={handleClearFilters}
        onClose={() => setFilterModalVisible(false)}
      />
      <FlatList
        ref={flatListRef}
        data={paginatedMoves}
        keyExtractor={item => item.name}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openMoveModal(item)} activeOpacity={0.8}>
            <View key={item.id} style={styles.moveCard}>
        <View style={styles.moveTypeBadge}>
          <RNImage
            source={getTypeIcon(item.type)}
            style={{ width: 75, height: 32 }}
            resizeMode="contain"
          />
        </View>
        <RNImage
          source={getClassIcon(item.damage_class)}
          style={{ width: 35, height: 28 }}
          resizeMode="contain"
        />
        <View style={styles.moveInfo}>
          <Text style={styles.moveName}>{item.name}</Text>
          <View style={styles.moveStatsRow}>
            <Text style={styles.moveStat}>Power: {item.power ?? '-'}</Text>
            <Text style={styles.moveStat}>
              Acc: {item.accuracy != null ? `${item.accuracy}%` : '-'}
            </Text>
            <Text style={styles.moveStat}>PP: {item.pp ?? '-'}</Text>
          </View>
        </View>
      </View>
          </TouchableOpacity>
        )}
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
      <MoveDetailsModal isVisible={isModalVisible} onClose={closeMoveModal} move={selectedMove} />
    </View>
  );
} 