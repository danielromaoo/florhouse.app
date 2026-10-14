import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { spacing } from '../../styles/global';

export const styles = StyleSheet.create({
  company: {
    fontSize: fonts.sizes.subtitle,
    fontWeight: fonts.weights.bold,
    color: colors.primaryDark,
    marginBottom: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  rowIcon: { marginRight: spacing.sm },
  rowText: {
    flex: 1,
    fontSize: fonts.sizes.body,
    color: colors.text,
  },
  sectionTitle: {
    fontSize: fonts.sizes.subtitle,
    fontWeight: fonts.weights.bold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
});
