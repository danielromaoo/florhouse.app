import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { radius, spacing } from '../../styles/global';

export const styles = StyleSheet.create({
  wrapper: { marginBottom: spacing.md },
  label: {
    fontSize: fonts.sizes.small,
    fontWeight: fonts.weights.medium,
    color: colors.textLight,
    marginBottom: spacing.xs,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
  },
  fieldError: { borderColor: colors.error },
  leftIcon: { marginRight: spacing.sm },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: fonts.sizes.body,
    color: colors.text,
  },
  multiline: { minHeight: 90, textAlignVertical: 'top' },
  error: {
    color: colors.error,
    fontSize: fonts.sizes.small,
    marginTop: spacing.xs,
  },
});
