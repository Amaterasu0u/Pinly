import { getAuth, signOut } from '@react-native-firebase/auth';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const user = getAuth().currentUser;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.card}>
        {user?.photoURL ? (
          <Image source={{ uri: user.photoURL }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, styles.avatarFallback]} />
        )}
        <Text style={styles.name}>{user?.displayName}</Text>
        <Text style={styles.email}>{user?.email}</Text>

        <TouchableOpacity style={styles.button} onPress={() => signOut(getAuth())}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
      {/* The user's own posts will be listed here later. */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  card: { alignItems: 'center', paddingTop: 32, paddingHorizontal: 24 },
  avatar: { width: 96, height: 96, borderRadius: 48, marginBottom: 16 },
  avatarFallback: { backgroundColor: '#ddd' },
  name: { fontSize: 22, fontWeight: '600' },
  email: { fontSize: 15, color: '#666', marginTop: 4, marginBottom: 24 },
  button: {
    backgroundColor: '#E60023',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});