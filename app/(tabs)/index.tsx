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
          * O Nome: Batizada em homenagem à filha da criadora (Bárbara), enquanto o namorado Ken (lançado em 1961)
           foi nomeado em homenagem ao filho de Ruth, Kenneth.
        </Text>
      </View>
      <View style={styles.ContainerTexto}>
        <Text style={styles.texto}>
         * O Lançamento: Estreou na Feira Anual de Brinquedos de Nova York vestindo um maiô listrado em preto e branco, óculos de sol brancos
          e cabelo preso em um rabo de cavalo loiro.
        </Text>
      </View>
      <View style={styles.ContainerTexto}>
        <Text style={styles.texto}>
          * Sucesso nas Telas: Estrelou mais de 40 filmes animados (começando com Barbie em O Quebra-Nozes, em 2001) e conquistou o cinema live-action em 2023, em um filme dirigido por Greta Gerwig que se
           tornou a maior bilheteria daquele ano.
        </Text>
      </View>
      <View style={styles.ContainerTexto}>
        <Text style={styles.texto}>
          * Relacionamentos: Seu eterno namorado é o Ken (Kenneth Sean Carson), apresentado em 1961. O casal protagonizou uma separação midiática entre 2004 e 2011, período em que Barbie namorou o surfista australiano
           Blaine antes de reatar com Ken.
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
    height: 100,
    width: '100%',
    justifyContent: 'center',
    padding: 60
  },

  header: {
    height: 150,

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
    fontSize: 15
  },

  ContainerTexto: {
    padding: 20
  }
});