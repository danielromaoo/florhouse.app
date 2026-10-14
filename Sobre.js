import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Toolbar from '../../components/Toolbar/Toolbar';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/global';
import { styles } from './Sobre.styles';

export default function Sobre({ navigation }) {
  return (
    <View style={globalStyles.screen}>
      <Toolbar
        title="Sobre"
        leftIcon="arrow-back"
        onLeftPress={() => navigation.navigate('Home')}
      />

      <ScrollView contentContainerStyle={globalStyles.content}>
        <View style={styles.logoBox}>
          <View style={styles.logo}>
            <Ionicons name="flower" size={44} color={colors.white} />
          </View>
          <Text style={styles.appName}>Florhouse</Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.text}>
            O Florhouse é o aplicativo da floricultura Florhouse (empresa fictícia),
            desenvolvido como projeto acadêmico para a disciplina de Programação
            para Dispositivos Móveis I.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={styles.label}>Missão</Text>
          <Text style={globalStyles.text}>
            Levar beleza e afeto às pessoas por meio de flores sempre frescas.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={styles.label}>Visão</Text>
          <Text style={globalStyles.text}>
            Ser a floricultura digital preferida da região.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={styles.label}>Valores</Text>
          <Text style={globalStyles.text}>
            Frescor, cuidado com o cliente e respeito ao meio ambiente.
          </Text>
        </View>

        <Text style={styles.version}>Versão: 1.0</Text>
      </ScrollView>
    </View>
  );
}
