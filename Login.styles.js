import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { radius, spacing } from '../../styles/global';

export const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  appName: {
    fontSize: fonts.sizes.hero,
    fontWeight: fonts.weights.bold,
    color: colors.primaryDark,
  },
  tagline: {
    fontSize: fonts.sizes.body,
    color: colors.textLight,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  form: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  formTitle: {
    fontSize: fonts.sizes.title,
    fontWeight: fonts.weights.bold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  generalError: {
    backgroundColor: '#FDECEA',
    borderRadius: radius.sm,
    padding: spacing.sm,
    marginBottom: spacing.md,
  },
  generalErrorText: {
    color: colors.error,
    fontSize: fonts.sizes.small,
    fontWeight: fonts.weights.medium,
  },
  hint: {
    textAlign: 'center',
    color: colors.textLight,
    fontSize: fonts.sizes.small,
    marginTop: spacing.md,
  },
});
