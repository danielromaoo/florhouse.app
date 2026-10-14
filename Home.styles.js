import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { radius, spacing } from '../../styles/global';

export const styles = StyleSheet.create({
  banner: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  bannerTitle: {
    color: colors.white,
    fontSize: fonts.sizes.title,
    fontWeight: fonts.weights.bold,
  },
  bannerText: {
    color: colors.white,
    fontSize: fonts.sizes.body,
    marginTop: spacing.xs,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: fonts.sizes.subtitle,
    fontWeight: fonts.weights.bold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  flowersRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  flowerCard: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  flowerEmoji: { fontSize: 40, marginBottom: spacing.xs },
  flowerName: {
    fontSize: fonts.sizes.body,
    fontWeight: fonts.weights.bold,
    color: colors.text,
  },
  flowerMeaning: {
    fontSize: fonts.sizes.small,
    color: colors.textLight,
    textAlign: 'center',
    marginTop: 2,
  },
  actions: { marginTop: spacing.sm },
});
