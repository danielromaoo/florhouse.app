import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/global';
import { CREDENCIAIS_TESTE } from '../../data/credenciais';
import { styles } from './Login.styles';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erroUsuario, setErroUsuario] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [erroGeral, setErroGeral] = useState('');

  function limparErros() {
    setErroUsuario('');
    setErroSenha('');
    setErroGeral('');
  }

  // Evento do botão "Entrar": valida os campos e as credenciais
  function handleEntrar() {
    limparErros();

    if (usuario.trim() === '') {
      setErroUsuario('Informe o usuário.');
      return;
    }
    if (senha === '') {
      setErroSenha('Informe a senha.');
      return;
    }
    if (
      usuario.trim() !== CREDENCIAIS_TESTE.usuario ||
      senha !== CREDENCIAIS_TESTE.senha
    ) {
      setErroGeral('Usuário ou senha inválidos.');
      return;
    }

    // Login válido: vai para a Home levando o nome do usuário como parâmetro.
    // "replace" impede voltar para o Login pelo botão de voltar do celular.
    navigation.replace('Home', { usuario: usuario.trim() });
  }

  // Evento do botão "Limpar"
  function handleLimpar() {
    setUsuario('');
    setSenha('');
    limparErros();
  }

  return (
    <KeyboardAvoidingView
      style={globalStyles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <View style={styles.logo}>
            <Ionicons name="flower-outline" size={52} color={colors.white} />
          </View>
          <Text style={styles.appName}>Florhouse</Text>
          <Text style={styles.tagline}>Flores frescas, do jardim até você</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.formTitle}>Entrar</Text>

          {erroGeral ? (
            <View style={styles.generalError}>
              <Text style={styles.generalErrorText}>{erroGeral}</Text>
            </View>
          ) : null}

          <Input
            label="Usuário"
            icon="person-outline"
            placeholder="Digite seu usuário"
            value={usuario}
            onChangeText={setUsuario}
            error={erroUsuario}
          />

          <Input
            label="Senha"
            icon="lock-closed-outline"
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            error={erroSenha}
            secureTextEntry
          />

          <Button title="Entrar" icon="log-in-outline" onPress={handleEntrar} />
          <Button title="Limpar campos" variant="outline" onPress={handleLimpar} />
        </View>

        <Text style={styles.hint}>
          Login de demonstração. Nenhum dado é salvo no aparelho.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
