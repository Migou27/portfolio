import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  typesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  
  header: {
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  
  id: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 5,
  },
  
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    textTransform: 'capitalize',
  },
  
  spriteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#ffffff',
    marginBottom: 10,
  },
  
  spriteSection: {
    alignItems: 'center',
  },
  
  spriteLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666666',
    marginBottom: 10,
  },
  
  sprite: {
    width: 120,
    height: 120,
  },
  
  section: {
    backgroundColor: '#ffffff',
    marginBottom: 10,
    padding: 20,
  },
  
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  
  infoLabel: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '500',
  },
  
  infoValue: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
  },
  
  abilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  
  abilityName: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  
  hiddenAbility: {
    fontSize: 14,
    color: '#e74c3c',
    fontStyle: 'italic',
    marginLeft: 8,
  },
  
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  
  statName: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
    width: 100,
  },
  
  statBarContainer: {
    flex: 1,
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginHorizontal: 10,
  },
  
  statBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  
  statValue: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
    width: 40,
    textAlign: 'right',
  },
  
  formsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  
  formCard: {
    width: (width - 60) / 2,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  
  formSprite: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  
  formName: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  
  error: {
    fontSize: 16,
    color: '#e74c3c',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  
  noData: {
    fontSize: 16,
    color: '#666666',
    fontStyle: 'italic',
    textAlign: 'center',
  },


tabContainer: {
  flexDirection: 'row',
  backgroundColor: '#f0f0f0',
  borderRadius: 8,
  padding: 4,
  marginBottom: 15,
},

tabButton: {
  flex: 1,
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 6,
  alignItems: 'center',
},

activeTabButton: {
  backgroundColor: '#ffffff',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
},

tabText: {
  fontSize: 14,
  fontWeight: '500',
  color: '#666666',
},

activeTabText: {
  color: '#333333',
  fontWeight: 'bold',
},

tabContent: {
  minHeight: 100,
  margin: 20
},
});



export default styles;