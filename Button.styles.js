import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { radius, spacing } from '../../styles/global';

export const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.pill,
    marginTop: spacing.sm,
  },
  primary: { backgroundColor: colors.primary },
  secondary: { backgroundColor: colors.secondary },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  text: {
    fontSize: fonts.sizes.body,
    fontWeight: fonts.weights.bold,
  },
  textFilled: { color: colors.white },
  textOutline: { color: colors.primary },
  icon: { marginRight: spacing.sm },
  pressed: { opacity: 0.8 },
});
