import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (

     <View
          style={styles.container}
        >
        <View style={styles.header}>
          <ImageBackground
            source={require('@/assets/images/ken.png')}
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
              * Origem e Moradia: Na biografia oficial, Ken nasceu na cidade fictícia de Willows, em Wisconsin (EUA). Na fase adulta, mudou-se para Malibu, na Califórnia, 
              onde mora na casa em frente à da Barbie.
            </Text>
          </View>
          <View style={styles.ContainerTexto}>
            <Text style={styles.texto}>
            * Homenagem Familiar: Assim como a Barbie recebeu o nome da filha de Ruth Handler (Barbara), o Ken foi batizado
               em homenagem ao filho da criadora, Kenneth.
            </Text>
          </View>
          <View style={styles.ContainerTexto}>
            <Text style={styles.texto}>
              * Família e Amigos: Ele tem um irmão mais novo chamado Tommy (lançado em 1997) e seu melhor amigo histórico é o Allan 
              (criado em 1964 com a propaganda de que todas as roupas do Ken serviam nele).
            </Text>
          </View>
           <View style={styles.ContainerTexto}>
            <Text style={styles.texto}>
             * O Primeiro Encontro: Segundo a história oficial da marca, Barbie e Ken se 
             conheceram nos bastidores de seu primeiro comercial de televisão em 1961 e se apaixonaram imediatamente. Ele estreou vestindo apenas um calção de banho vermelho e segurando uma toalha amarela.

            </Text>
          </View>
          </ScrollView>
    
        </View>
      )
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#8ad2eeef',
      },
    
     
    
      fundo: {
        height: 225,
        width: '100%',
        justifyContent: 'center',
        padding: 25
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