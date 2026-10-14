import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { spacing } from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingBottom: spacing.sm,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  side: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: colors.white,
    fontSize: fonts.sizes.subtitle,
    fontWeight: fonts.weights.bold,
  },
});
