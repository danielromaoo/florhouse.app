import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { styles } from './Input.styles';

// Campo de texto reutilizável com rótulo, ícone, mensagem de erro
// e botão de mostrar/ocultar quando for campo de senha.
export default function Input({
  label,
  value,
  onChangeText,
  placeholder,
  icon,
  error,
  secureTextEntry = false,
  multiline = false,
  keyboardType,
}) {
  const [oculto, setOculto] = useState(secureTextEntry);

  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View style={[styles.field, error && styles.fieldError]}>
        {icon ? (
          <Ionicons name={icon} size={20} color={colors.textLight} style={styles.leftIcon} />
        ) : null}

        <TextInput
          style={[styles.input, multiline && styles.multiline]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.textLight}
          secureTextEntry={oculto}
          autoCapitalize="none"
          autoCorrect={false}
          multiline={multiline}
          keyboardType={keyboardType}
          accessibilityLabel={label}
        />

        {secureTextEntry ? (
          <Pressable
            onPress={() => setOculto(!oculto)}
            accessibilityLabel={oculto ? 'Mostrar senha' : 'Ocultar senha'}
          >
            <Ionicons
              name={oculto ? 'eye-outline' : 'eye-off-outline'}
              size={22}
              color={colors.textLight}
            />
          </Pressable>
        ) : null}
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}
