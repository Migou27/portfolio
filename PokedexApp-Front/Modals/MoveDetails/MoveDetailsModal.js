import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from './MoveDetailsModal.styles';
import paths from '../../assets/importImages';
import { Image as RNImage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config';

const getTypeIcon = (type) => {
  return paths.typeIcons[type?.toLowerCase()] || null;
};

const getClassIcon = (moveClass) => {
  return paths.classIcons[moveClass?.toLowerCase()] || null;
};

const MoveDetailModal = ({ isVisible, onClose, move }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemonList = async () => {
      if (isVisible && move?.name) {
        setLoading(true);
        try {
          const token = await AsyncStorage.getItem('token');
          const res = await fetch(`${config.apiUrl}/api/pokemon/move/${move.name}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await res.json();
          setPokemonList(data);
          setLoading(false);
        } catch (e) {
          setPokemonList([]);
          setLoading(false);
        }
      } else {
        setPokemonList([]);
      }
    };
  
    fetchPokemonList();
  }, [isVisible, move?.name]);

  if (!move) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{move.name}</Text>
          <View style={styles.modalDetailRow}>
            <Text style={styles.modalLabel}>Type:</Text>
            {move.type && (
              <RNImage
                source={getTypeIcon(move.type)}
                style={{ width: 75, height: 32}}
                resizeMode="contain"
              />
            )}
          </View>
          <View style={styles.modalDetailRow}>
            <Text style={styles.modalLabel}>Class:</Text>
            <RNImage
              source={getClassIcon(move.damage_class)}
              style={{ width: 35, height: 28 }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.modalDetailRow}>
            <Text style={styles.modalLabel}>Power:</Text>
            <Text style={styles.modalValue}>{move.power || 'N/A'}</Text>
          </View>
          <View style={styles.modalDetailRow}>
            <Text style={styles.modalLabel}>Accuracy:</Text>
            <Text style={styles.moveStat}>
              {move.accuracy != null ? `${move.accuracy}%` : '-'}
            </Text>
          </View>
          <View style={styles.modalDetailRow}>
            <Text style={styles.modalLabel}>PP:</Text>
            <Text style={styles.modalValue}>{move.pp || 'N/A'}</Text>
          </View>
          <View style={styles.modalDetailRow}>
            <Text style={styles.modalLabel}>Effect:</Text>
            <Text style={styles.modalValue}>{move.short_effect || 'No effect description available.'}</Text>
          </View>

          {/* Pokémon connaissant l'attaque */}
          <Text style={styles.modalSectionTitle}>Pokemon that learn the move :</Text>
          {loading ? (
            <ActivityIndicator size="small" color="#888" style={{ marginVertical: 10 }} />
          ) : (
            <FlatList
              horizontal
              data={pokemonList}
              keyExtractor={(item, index) => `${item.name}-${index}`}
              renderItem={({ item }) => (
                <View style={{ alignItems: 'center', marginRight: 12 }}>
                  <RNImage source={{ uri: item.sprite_front_default }} style={styles.modalImage} />
                  <Text style={{ fontSize: 12, marginTop: 2 }}>{item.name}</Text>
                </View>
              )}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.modalImagesContainer}
            />
          )}

          <TouchableOpacity onPress={onClose} style={styles.modalCloseButton}>
            <Text style={styles.modalCloseButtonText}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MoveDetailModal;