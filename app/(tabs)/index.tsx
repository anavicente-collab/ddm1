import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function HomeScreen() {
  return (

    <View
      style={styles.container}
    >
    <View style={styles.header}>
      <ImageBackground
        source={require('@/assets/images/Barbie_Logo.svg')}
        style={styles.fundo}
        resizeMode="contain"
      >
      </ImageBackground>
    </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
      <View style={styles.ContainerTexto}>
        <Text style={styles.texto}>
          O Nome: Batizada em homenagem à filha da criadora (Bárbara), enquanto o namorado Ken (lançado em 1961)
           foi nomeado em homenagem ao filho de Ruth, Kenneth.
        </Text>
      </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1aef4ef',
  },

 

  fundo: {
    height: 180,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  header: {
    height: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  scrollView: {
    flex: 1,
  },

  content: {
    paddingVertical: 10,
  },

  texto: {
    fontSize: 22
  },

  ContainerTexto: {
    padding: 25
  }
});