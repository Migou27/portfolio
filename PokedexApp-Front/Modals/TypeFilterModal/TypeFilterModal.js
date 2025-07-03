import React from 'react';
import { Modal, View, Text, ScrollView, TouchableOpacity } from 'react-native';

const TypeFilterModal = ({ visible, types, selectedTypes, onSelect, onClear, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 20, width: '85%', maxHeight: '70%' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 12, textAlign: 'center' }}>Filter by Type</Text>
          <ScrollView style={{ maxHeight: 300 }}>
            {types.map(type => (
              <TouchableOpacity
                key={type}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  marginBottom: 4,
                  borderRadius: 8,
                  backgroundColor: selectedTypes.includes(type) ? '#3578e5' : '#f0f0f0',
                }}
                onPress={() => onSelect(type)}
              >
                <Text style={{ color: selectedTypes.includes(type) ? '#fff' : '#333', fontWeight: 'bold', fontSize: 14, textTransform: 'capitalize' }}>{type}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
            <TouchableOpacity
              style={{ backgroundColor: '#ff6666', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 16 }}
              onPress={onClear}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#3578e5', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 16 }}
              onPress={onClose}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TypeFilterModal;