import React, { useEffect, useState, useRef } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, Animated } from 'react-native';
import axios from 'axios';
import config from '../../config';
import styles from './ItemsList.styles';
import ItemDetailModal from '../../Modals/ItemDetails/ItemDetailsModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const numColumns = 3;
const CARD_MARGIN = 6;
const CARD_WIDTH = (Dimensions.get('window').width - (numColumns + 1) * CARD_MARGIN) / numColumns;
const PAGE_SIZE = 10;

export default function ItemsList() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const flatListRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(`${config.apiUrl}/api/items`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load items');
        setLoading(false);
      }
    };
  
    fetchItems();
  }, []);

  useEffect(() => {
    setPage(1); // Reset pagination on search change
  }, [search]);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );
  const paginatedItems = filteredItems.slice(0, page * PAGE_SIZE);

  const handleLoadMore = () => {
    if (paginatedItems.length < filteredItems.length && !loadingMore) {
      setLoadingMore(true);
      setTimeout(() => {
        setPage(prev => prev + 1);
        setLoadingMore(false);
      }, 500); // Simulate async loading
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
        placeholder="Search items..."
        value={search}
        onChangeText={setSearch}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
      <FlatList
        ref={flatListRef}
        data={paginatedItems}
        keyExtractor={item => item.name}
        contentContainerStyle={styles.gridContainer}
        numColumns={numColumns}
        key={numColumns}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedItem(item);
              setModalVisible(true);
            }}
            activeOpacity={0.8}
            style={[styles.card, { width: CARD_WIDTH, margin: CARD_MARGIN, alignSelf: 'stretch' }]}
          >
            {item.sprite_default && (
              <Image
                source={{ uri: item.sprite_default }}
                style={styles.sprite}
                resizeMode="contain"
              />
            )}
            <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
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

      <ItemDetailModal visible={modalVisible} item={selectedItem} onClose={() => setModalVisible(false)} />
    </View>
  );
} 