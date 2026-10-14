import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Toolbar from '../../components/Toolbar/Toolbar';
import Button from '../../components/Button/Button';
import { globalStyles } from '../../styles/global';
import { styles } from './Home.styles';

const FLORES = [
  { id: '1', emoji: '🌹', nome: 'Rosas', significado: 'Amor e paixão' },
  { id: '2', emoji: '🌻', nome: 'Girassóis', significado: 'Alegria e energia' },
  { id: '3', emoji: '🌷', nome: 'Tulipas', significado: 'Carinho e elegância' },
  { id: '4', emoji: '🌿', nome: 'Folhagens', significado: 'Frescor e natureza' },
];

export default function Home({ navigation, route }) {
  // Parâmetro recebido da tela de Login
  const usuario = route.params?.usuario ?? 'visitante';

  return (
    <View style={globalStyles.screen}>
      <Toolbar
        title="Home"
        rightIcon="log-out-outline"
        onRightPress={() => navigation.replace('Login')}
      />

      <ScrollView contentContainerStyle={globalStyles.content}>
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Bem-vindo ao Florhouse, {usuario}!</Text>
          <Text style={styles.bannerText}>
            Arranjos, buquês e plantas para cada momento especial da sua vida.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Flores em destaque</Text>
        <View style={styles.flowersRow}>
          {FLORES.map((flor) => (
            <View key={flor.id} style={styles.flowerCard}>
              <Text style={styles.flowerEmoji}>{flor.emoji}</Text>
              <Text style={styles.flowerName}>{flor.nome}</Text>
              <Text style={styles.flowerMeaning}>{flor.significado}</Text>
            </View>
          ))}
        </View>

        <View style={styles.actions}>
          <Button
            title="Sobre nós"
            icon="information-circle-outline"
            onPress={() => navigation.navigate('Sobre')}
          />
          <Button
            title="Contato"
            icon="call-outline"
            variant="secondary"
            onPress={() => navigation.navigate('Contato')}
          />
        </View>
      </ScrollView>
    </View>
  );
}
