import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';

const ItemDetailModal = ({ visible, item, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 12,
          padding: 24,
          alignItems: 'center',
          width: '80%'
        }}>
          {item && (
            <>
              {item.sprite_default && (
                <Image
                  source={{ uri: item.sprite_default }}
                  style={{ width: 64, height: 64, marginBottom: 12 }}
                  resizeMode="contain"
                />
              )}
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 14, color: '#555', textAlign: 'center' }}>
                {item.effect || 'No effect.'}
              </Text>
              <TouchableOpacity
                onPress={onClose}
                style={{ marginTop: 18, padding: 10, backgroundColor: '#3578e5', borderRadius: 6 }}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Close</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ItemDetailModal;