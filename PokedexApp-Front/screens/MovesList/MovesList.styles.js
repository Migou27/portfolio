import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    marginTop: 12,
  },
  
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  
  error: {
    fontSize: 16,
    color: '#e74c3c',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  
  searchBar: {
    height: 40,
    borderColor: '#d0d0d0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginHorizontal: 12,
    marginTop: 4,
    marginBottom: 6,
    backgroundColor: '#fff',
    fontSize: 14,
  },
  
  sortButton: {
    backgroundColor: '#3578e5',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 8,
    alignItems: 'center',
    alignSelf: 'center',
    width: 160,
  },
  
  sortButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  
  typeFilterScroll: {
    marginBottom: 8,
  },
  
  typeFilterContainer: {
    paddingHorizontal: 12,
    paddingTop: 0,
  },
  
  typeFilterButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    width: 80,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderBottomWidth: 3,
    borderBottomColor: '#3578e5',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  
  typeFilterButtonActive: {
    backgroundColor: '#3578e5',
    borderColor: '#3578e5',
  },
  
  typeFilterButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    textTransform: 'capitalize',
  },
  
  typeFilterButtonTextActive: {
    color: '#fff',
  },
  
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    textTransform: 'capitalize',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  
  typeBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
    textTransform: 'capitalize',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  
  power: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  
  scrollTopButton: {
    position: 'absolute',
    right: 18,
    bottom: 28,
    backgroundColor: '#3578e5',
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 18,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
  },
  
  scrollTopButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  compactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
  },
  compactLeft: {
    marginRight: 10,
    minWidth: 48,
    alignItems: 'center',
  },
  compactTypeBadge: {
    backgroundColor: '#eee',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  compactTypeBadgeText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'capitalize',
  },
  compactCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  compactName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textTransform: 'capitalize',
  },
  compactRight: {
    alignItems: 'flex-end',
    minWidth: 70,
  },
  compactStat: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },


  //----MOVE LIST NEW----------

  movesList: {
    marginTop: 8,
  },

  moveCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 4,
    paddingVertical: 6,
    paddingHorizontal: 10,
    width: '100%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    
    borderWidth: 0.5,
    borderColor: '#d5d8dc',
  },

  moveTypeBadge: {
    borderRadius: 8,
    paddingVertical: 2,
    marginRight: 8,
  },

  moveTypeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'capitalize',
  },

  moveInfo: {
    flex: 1,
    paddingLeft: 8,
  },

  moveName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
    marginBottom: 2,
    textTransform: 'capitalize',
  },

  moveStatsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  moveStat: {
    fontSize: 11,
    color: '#555',
    marginRight: 8,
  },  
});

export default styles; 