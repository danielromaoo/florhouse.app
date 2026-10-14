import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fonts } from './fonts';

// Espaçamentos e arredondamentos reutilizados em todo o app
export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };
export const radius = { sm: 8, md: 12, lg: 20, pill: 999 };

// Estilos globais reutilizáveis pelas telas
export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  title: {
    fontSize: fonts.sizes.title,
    fontWeight: fonts.weights.bold,
    color: colors.primaryDark,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: fonts.sizes.subtitle,
    fontWeight: fonts.weights.medium,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  text: {
    fontSize: fonts.sizes.body,
    color: colors.text,
    lineHeight: 22,
  },
  textLight: {
    fontSize: fonts.sizes.small,
    color: colors.textLight,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  errorText: {
    color: colors.error,
    fontSize: fonts.sizes.small,
    marginTop: spacing.xs,
  },
  successText: {
    color: colors.success,
    fontSize: fonts.sizes.small,
    marginTop: spacing.xs,
  },
});
