import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
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