import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/ryan.png')}
            style={styles.fundo}
            resizeMode="contain"
          />
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.ContainerTexto}>
          <Text style={styles.texto}>
            * Estreia no Mercado: Foi lançado pela Mattel entre 2011 e 2012. O verso da caixa da boneca Raquelle confirmava oficialmente que os dois eram irmãos gêmeos, marcando-o também como um dos primeiros amigos homens
            da franquia com traços de ascendência asiática
          </Text>
        </View>

        <View style={styles.ContainerTexto}>
          <Text style={styles.texto}>
            * O Bad Boy Egocêntrico: Ryan é extremamente vaidoso, confiante e orgulhoso de sua aparência (ele adora exibir seu abdômen definido de plástico). Ele possui uma mansão própria cheia de pôsteres e
            státuas de si mesmo (a Mansão Ryan)
          </Text>
        </View>

        <View style={styles.ContainerTexto}>
          <Text style={styles.texto}>
            * Rivalidade com Ken: Ryan nutre uma rivalidade amarga com Ken. Ele tenta constantemente sabotar os encontros do casal ou provar que é melhor, mais bonito
            e mais talentoso que o namorado da Barbie.
          </Text>
        </View>

        <View style={styles.ContainerTexto}>
          <Text style={styles.texto}>
            * Fobia Incomum: Apesar de tentar bancar o durão e destemido, ele sofre de claustrofobia, astrafobia (medo de trovões) e
            tem pavor absoluto de golfinhos e zumbis.
          </Text>
        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80bb7def',
  },

  fundo: {
    width: 300,
    height: 245,
  },

  logoContainer: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    height: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#a2da9d',
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 3,
  },
});