import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gridContainer: {
    backgroundColor: '#f7f7f7',
    margin: 8
  },
  searchBar: {
    height: 40,
    borderColor: '#d0d0d0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 6,
    backgroundColor: '#fff',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 6,
    marginBottom: 6,
    margin: 'auto',
    alignItems: 'center',
    alignSelf: 'stretch',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,

    borderWidth: 0.5,
    borderColor: '#d5d8dc',
  },
  sprite: {
    width: 36,
    height: 36,
    marginBottom: 6,
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 2,
    textAlign: 'center',
  },
  desc: {
    fontSize: 11,
    color: '#555',
    textAlign: 'center',
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});

export default styles; 