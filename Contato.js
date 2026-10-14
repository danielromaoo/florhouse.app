import React, { useState } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Toolbar from '../../components/Toolbar/Toolbar';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/global';
import { styles } from './Contato.styles';

function InfoRow({ icon, texto }) {
  return (
    <View style={styles.row}>
      <Ionicons name={icon} size={20} color={colors.primary} style={styles.rowIcon} />
      <Text style={styles.rowText}>{texto}</Text>
    </View>
  );
}

export default function Contato({ navigation }) {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erroNome, setErroNome] = useState('');
  const [erroMensagem, setErroMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  // Formulário de contato (apenas simulado, nada é enviado)
  function handleEnviar() {
    setEnviado(false);
    setErroNome(nome.trim() === '' ? 'Informe seu nome.' : '');
    setErroMensagem(mensagem.trim() === '' ? 'Escreva uma mensagem.' : '');

    if (nome.trim() === '' || mensagem.trim() === '') return;

    setEnviado(true);
    setNome('');
    setMensagem('');
  }

  return (
    <View style={globalStyles.screen}>
      <Toolbar
        title="Contato"
        leftIcon="arrow-back"
        onLeftPress={() => navigation.navigate('Home')}
      />

      <ScrollView contentContainerStyle={globalStyles.content} keyboardShouldPersistTaps="handled">
        <View style={globalStyles.card}>
          <Text style={styles.company}>Florhouse Floricultura</Text>
          <InfoRow icon="call-outline" texto="Telefone: (11) 98888-0000" />
          <InfoRow icon="mail-outline" texto="E-mail: contato@florhouse.com" />
          <InfoRow icon="location-outline" texto="Endereço: Rua das Margaridas, 120" />
          <InfoRow icon="time-outline" texto="Seg a Sáb, das 8h às 18h" />

          <Button
            title="Ligar"
            icon="call"
            onPress={() => Linking.openURL('tel:+5511988880000')}
          />
          <Button
            title="Enviar e-mail"
            icon="mail"
            variant="secondary"
            onPress={() => Linking.openURL('mailto:contato@florhouse.com')}
          />
        </View>

        <View style={globalStyles.card}>
          <Text style={styles.sectionTitle}>Fale com a gente</Text>

          <Input
            label="Nome"
            icon="person-outline"
            placeholder="Seu nome"
            value={nome}
            onChangeText={setNome}
            error={erroNome}
          />
          <Input
            label="Mensagem"
            placeholder="Escreva sua mensagem"
            value={mensagem}
            onChangeText={setMensagem}
            error={erroMensagem}
            multiline
          />

          <Button title="Enviar mensagem" onPress={handleEnviar} />
          {enviado ? (
            <Text style={globalStyles.successText}>
              Mensagem enviada com sucesso! (simulação)
            </Text>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}
