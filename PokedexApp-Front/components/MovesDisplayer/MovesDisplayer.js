import React from 'react';
import { View, Text } from 'react-native';
import { Image as RNImage } from 'react-native';
import styles from './MovesDisplayer.styles';

const MovesDisplayer = ({ moves, getTypeIcon, getClassIcon}) => (
  <View style={styles.movesList}>
    {moves.map((move, idx) => (
      <View key={idx} style={styles.moveCard}>
        <View style={styles.moveTypeBadge}>
          <RNImage
            source={getTypeIcon(move.type)}
            style={{ width: 75, height: 32 }}
            resizeMode="contain"
          />
        </View>
        <RNImage
          source={getClassIcon(move.damage_class)}
          style={{ width: 35, height: 28 }}
          resizeMode="contain"
        />
        <View style={styles.moveInfo}>
          <Text style={styles.moveName}>{move.name}</Text>
          <View style={styles.moveStatsRow}>
            <Text style={styles.moveStat}>Power: {move.power ?? '-'}</Text>
            <Text style={styles.moveStat}>
              Acc: {move.accuracy != null ? `${move.accuracy}%` : '-'}
            </Text>
            <Text style={styles.moveStat}>PP: {move.pp ?? '-'}</Text>
          </View>
        </View>
      </View>
    ))}
  </View>
);

export default MovesDisplayer;