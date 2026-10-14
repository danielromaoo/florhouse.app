import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../styles/colors';
import { styles } from './Toolbar.styles';

// Toolbar reutilizável. O título muda conforme a tela.
// - leftIcon/onLeftPress: botão da esquerda (ex.: voltar para Home)
// - rightIcon/onRightPress: botão da direita (ex.: sair)
export default function Toolbar({ title, leftIcon, onLeftPress, rightIcon, onRightPress }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
      <View style={styles.side}>
        {leftIcon ? (
          <Pressable onPress={onLeftPress} accessibilityLabel="Voltar para a Home">
            <Ionicons name={leftIcon} size={26} color={colors.white} />
          </Pressable>
        ) : null}
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.side}>
        {rightIcon ? (
          <Pressable onPress={onRightPress} accessibilityLabel="Sair">
            <Ionicons name={rightIcon} size={24} color={colors.white} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}
