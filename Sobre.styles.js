import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { spacing } from '../../styles/global';

export const styles = StyleSheet.create({
  logoBox: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: fonts.sizes.title,
    fontWeight: fonts.weights.bold,
    color: colors.primaryDark,
    marginTop: spacing.sm,
  },
  label: {
    fontSize: fonts.sizes.small,
    fontWeight: fonts.weights.bold,
    color: colors.primary,
    textTransform: 'uppercase',
    marginBottom: spacing.xs,
  },
  version: {
    textAlign: 'center',
    color: colors.textLight,
    fontSize: fonts.sizes.small,
    marginTop: spacing.sm,
  },
});
