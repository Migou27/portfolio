import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  input: {
    width: '100%',
    maxWidth: 320,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    width: '100%',
    maxWidth: 320,
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  error: {
    color: 'red',
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  svg: {
    position: 'absolute',
    top: 200,
  }
});

export default styles;