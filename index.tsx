import { getAuth } from '@react-native-firebase/auth';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const user = getAuth().currentUser;
  const firstName = user?.displayName?.split(' ')[0] ?? 'there';

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.logo}>Pinly</Text>
        {user?.photoURL ? <Image source={{ uri: user.photoURL }} style={styles.avatar} /> : null}
      </View>
      <View style={styles.empty}>
        <Text style={styles.hello}>Hi {firstName}</Text>
        <Text style={styles.sub}>Your feed will show up here once posts are added.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  logo: { fontSize: 28, fontWeight: 'bold', color: '#E60023' },
  avatar: { width: 36, height: 36, borderRadius: 18 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  hello: { fontSize: 22, fontWeight: '600', marginBottom: 8 },
  sub: { fontSize: 15, color: '#666', textAlign: 'center' },
});