import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ActivityIndicator, Modal, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import config from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

function calculateStat(Base, IV, EV, Lvl, Nat) {
  const evPart = Math.ceil(EV / 4);
  const value = Math.floor(((2 * Base + IV + evPart) * Lvl) / 100 + 5);
  return Math.floor(value * Nat);
}

function calculateHP(Base, IV, EV, Lvl) {
  if (Base === 1) {
    return 1;
  }
  const evPart = Math.floor(EV / 4);
  const value = Math.floor(((2 * Base + IV + evPart) * Lvl) / 100);
  return value + Lvl + 10;
}

export default function StatCalculator({ baseStats, pokemonName }) {
  const [Lvl, setLvl] = useState(100);
  const [IVs, setIVs] = useState({ Hp: 31, Atk: 31, Def: 31, Spa: 31, SpDef: 31, Spd: 31 });
  const [EVs, setEVs] = useState({ Hp: 0, Atk: 0, Def: 0, Spa: 0, SpDef: 0, Spd: 0 });
  const [IVInputs, setIVInputs] = useState({ ...IVs });
  const [EVInputs, setEVInputs] = useState({ ...EVs });
  const [natures, setNatures] = useState([]);
  const [selectedNature, setSelectedNature] = useState(null);
  const [natureModifiers, setNatureModifiers] = useState({
    Atk: 1.0, Def: 1.0, Spa: 1.0, SpDef: 1.0, Spd: 1.0
  });
  const [loading, setLoading] = useState(true);
  const [showNatureModal, setShowNatureModal] = useState(false);

  // Helper for nature display
  const getNatureDisplay = () => {
    if (!selectedNature) return 'Neutral (Neutral)';
    if (!selectedNature.plus || !selectedNature.minus) return `${selectedNature.name} (Neutral)`;
    return `${selectedNature.name} (+${selectedNature.plus}, -${selectedNature.minus})`;
  };

  // Helper to get the Neutral nature object
  const getNeutralNature = () => {
    return natures.find(nat => (!nat.plus && !nat.minus)) || null;
  };

  // Helper for EV input validation
  const handleEVChange = (statName, value) => {
    if (value === '') {
      setEVInputs({ ...EVInputs, [statName]: '' });
      return;
    }
    let v = parseInt(value) || 0;
    v = Math.max(0, Math.min(252, v));
    setEVInputs({ ...EVInputs, [statName]: String(v) });
  };

  const handleEVEndEditing = (statName) => {
    let v = parseInt(EVInputs[statName]) || 0;
    v = Math.max(0, Math.min(252, v));
    // Check if adding this value would exceed 508
    const otherEVs = Object.entries(EVs)
      .filter(([k]) => k !== statName)
      .reduce((a, [k, val]) => a + (parseInt(val) || 0), 0);
    if (v + otherEVs > 508) {
      v = 508 - otherEVs;
      v = Math.max(0, v);
    }
    setEVs({ ...EVs, [statName]: v });
    setEVInputs({ ...EVInputs, [statName]: String(v) });
  };

  // Helper for IV input validation
  const handleIVChange = (statName, value) => {
    if (value === '') {
      setIVInputs({ ...IVInputs, [statName]: '' });
      return;
    }
    let v = parseInt(value) || 0;
    v = Math.max(0, Math.min(31, v));
    setIVInputs({ ...IVInputs, [statName]: String(v) });
  };

  const handleIVEndEditing = (statName) => {
    let v = parseInt(IVInputs[statName]) || 0;
    v = Math.max(0, Math.min(31, v));
    setIVs({ ...IVs, [statName]: v });
    setIVInputs({ ...IVInputs, [statName]: String(v) });
  };

  // Sync IV/EV state to input fields when stat changes externally
  useEffect(() => { setIVInputs({ ...IVs }); }, [IVs]);
  useEffect(() => { setEVInputs({ ...EVs }); }, [EVs]);

  const getStatBarWidth = (statValue) => {
    const maxStat = 550;
    const minStat = 1;
    const normalizedValue = Math.max(minStat, Math.min(maxStat, statValue));
    return (normalizedValue / maxStat) * 100;
  };

  const getStatBarColor = (statValue) => {
    return '#0080ff';
  };

  useEffect(() => {
    const fetchNatures = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(`${config.apiUrl}/api/natures`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setNatures(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des natures:', error);
        setLoading(false);
      }
    };
    fetchNatures();
  }, []);

  // Set neutral nature as default if none is selected
  useEffect(() => {
    if (!selectedNature && natures.length > 0) {
      setSelectedNature(getNeutralNature());
    }
    // eslint-disable-next-line
  }, [natures]);

  useEffect(() => {
    if (selectedNature && selectedNature.modifiers) {
      setNatureModifiers(selectedNature.modifiers);
    }
  }, [selectedNature]);

  const totalEV = Object.values(EVs).reduce((a, b) => a + b, 0);
  const overLimit = totalEV > 508;

  return (
    <View style={{ padding: 15, backgroundColor: '#f8f9fa', margin: 10, borderRadius: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>
        Stats calculator
      </Text>

      {/* Nature et Niveau sur la même ligne */}
      <View style={{ flexDirection: 'row', marginBottom: 10, gap: 10 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 2 }}>Nature:</Text>
          <TouchableOpacity
            onPress={() => setShowNatureModal(true)}
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              padding: 8,
              borderRadius: 4,
              backgroundColor: '#fff',
              justifyContent: 'center',
              minHeight: 30
            }}
          >
            <Text style={{ fontSize: 12, color: selectedNature ? '#333' : '#999' }}>
              {getNatureDisplay()}
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={{ flex: 0.5 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 2 }}>Level:</Text>
          <TextInput
            style={{ 
              borderWidth: 1, 
              borderColor: '#ddd', 
              padding: 5, 
              borderRadius: 4,
              backgroundColor: '#fff',
              fontSize: 12,
              textAlign: 'center'
            }}
            keyboardType="numeric"
            value={String(Lvl)}
            onChangeText={(v) => setLvl(Math.min(100, Math.max(1, parseInt(v) || 1)))}
          />
        </View>
      </View>

      {/* Stats une par ligne */}
      <View style={{ gap: 6 }}>
        {Object.keys(baseStats).map(statKey => {
          const statName = statKey === 'hp' ? 'HP' : 
                          statKey === 'attack' ? 'Atk' :
                          statKey === 'defense' ? 'Def' :
                          statKey === 'special-attack' ? 'SpA' :
                          statKey === 'special-defense' ? 'SpD' : 
                          statKey === 'speed' ? 'Spe' : statKey;
          
          const calculatedStat = statName === "Hp"
            ? calculateHP(baseStats[statKey], IVs[statName] || 0, EVs[statName] || 0, Lvl)
            : calculateStat(baseStats[statKey], IVs[statName] || 0, EVs[statName] || 0, Lvl, natureModifiers[statName] || 1.0);

          const evInputStyle = {
            borderWidth: 1,
            borderColor: overLimit ? '#e74c3c' : '#ddd',
            padding: 2,
            borderRadius: 2,
            width: 35,
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            fontSize: 10
          };

          return (
            <View key={statKey} style={{ 
              backgroundColor: '#fff', 
              padding: 8, 
              borderRadius: 6,
              borderWidth: 1,
              borderColor: '#e0e0e0'
            }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                  {statName} ({baseStats[statKey]})
                </Text>
                
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <Text style={{ fontSize: 10 }}>IV:</Text>
                    <TextInput
                      style={{
                        borderWidth: 1,
                        borderColor: '#ddd',
                        padding: 2,
                        borderRadius: 2,
                        width: 35,
                        textAlign: 'center',
                        backgroundColor: '#f9f9f9',
                        fontSize: 10
                      }}
                      keyboardType="numeric"
                      value={IVInputs[statName] === undefined ? String(IVs[statName] || 0) : String(IVInputs[statName])}
                      onChangeText={v => handleIVChange(statName, v)}
                      onEndEditing={() => handleIVEndEditing(statName)}
                    />
                  </View>
                  
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <Text style={{ fontSize: 10 }}>EV:</Text>
                    <TextInput
                      style={evInputStyle}
                      keyboardType="numeric"
                      value={EVInputs[statName] === undefined ? String(EVs[statName] || 0) : String(EVInputs[statName])}
                      onChangeText={v => handleEVChange(statName, v)}
                      onEndEditing={() => handleEVEndEditing(statName)}
                    />
                  </View>
                  
                  <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#2c3e50', marginLeft: 8 }}>
                    {calculatedStat}
                  </Text>
                </View>
              </View>
              
              {/* Barre de progression */}
              <View style={{ 
                height: 6, 
                backgroundColor: '#e0e0e0', 
                borderRadius: 3, 
                marginTop: 6,
                overflow: 'hidden'
              }}>
                <View style={{
                  height: '100%',
                  width: `${getStatBarWidth(calculatedStat)}%`,
                  backgroundColor: getStatBarColor(calculatedStat),
                  borderRadius: 3
                }} />
              </View>
            </View>
          );
        })}
      </View>

      {/* Remaining EVs display */}
      <Text style={{ color: overLimit ? '#e74c3c' : '#333', fontSize: 12, marginTop: 8, textAlign: 'center' }}>
        Remaining EVs: {Math.max(0, 508 - totalEV)}
      </Text>

      {/* Message if over EV limit */}
      {overLimit && (
        <Text style={{ color: '#e74c3c', fontSize: 12, marginTop: 4, textAlign: 'center' }}>
          Total EVs cannot exceed 508!
        </Text>
      )}

      {/* Modal pour sélectionner la nature */}
      <Modal
        visible={showNatureModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowNatureModal(false)}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: 20,
            width: '90%',
            maxHeight: '80%'
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Choose a nature:</Text>
              <TouchableOpacity onPress={() => setShowNatureModal(false)}>
                <Text style={{ fontSize: 24, color: '#666' }}>×</Text>
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={natures}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    padding: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: '#f0f0f0',
                    backgroundColor: selectedNature?.name === item.name ? '#e3f2fd' : 'transparent'
                  }}
                  onPress={() => {
                    setSelectedNature(item);
                    setShowNatureModal(false);
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: selectedNature?.name === item.name ? 'bold' : 'normal' }}>
                    {(!item.plus || !item.minus)
                      ? `${item.name} (Neutral)`
                      : `${item.name} (+${item.plus}, -${item.minus})`}
                  </Text>
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}