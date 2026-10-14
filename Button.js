import React from 'react';
import { Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { styles } from './Button.styles';

// Botão reutilizável. variant: 'primary' | 'secondary' | 'outline'
export default function Button({ title, onPress, variant = 'primary', icon }) {
  const isOutline = variant === 'outline';
  const iconColor = isOutline ? colors.primary : colors.white;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
      ]}
    >
      {icon ? (
        <Ionicons name={icon} size={20} color={iconColor} style={styles.icon} />
      ) : null}
      <Text style={[styles.text, isOutline ? styles.textOutline : styles.textFilled]}>
        {title}
      </Text>
    </Pressable>
  );
}
