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
          source={require('@/assets/images/raquelle (2).png')}
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
            * Estreia no Mercado: Foi lançada originalmente pela Mattel em 2006 na linha de
            bonecas Barbie Fashion Fever.
          </Text>
        </View>
        <View style={styles.ContainerTexto}>
          <Text style={styles.texto}>
            * De Amiga a Rival: Criada inicialmente para ser apenas mais uma amiga, a Mattel a transformou em rival para criar um contraste dinâmico com
            a personalidade sempre perfeita da Barbie.
          </Text>
        </View>
        <View style={styles.ContainerTexto}>
          <Text style={styles.texto}>
            * A "Vilã" Cômica: Ao contrário de vilãs tradicionais, Raquelle não é realmente má. Ela é egocêntrica, invejosa e melodramática, e seus planos para sabotar a Barbie
            quase sempre dão errado de forma hilária.
          </Text>
        </View>
        <View style={styles.ContainerTexto}>
          <Text style={styles.texto}>
            * Estilo de Moda: Seu lema é "Nunca subestime o poder do visual perfeito". Seu
            guarda-roupa é sofisticado e ousado, marcado por tons escuros, dourado, vermelho e estampas de animais.
          </Text>
        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cd95ffef',
  },



  fundo: {
    height: 250,
    width: '100%',
    justifyContent: 'center',
    padding: 190
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
    fontFamily: 'Inter_700Bold',
    fontSize: 25
  },

  ContainerTexto: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#cfaae7',
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 3,
  },
});