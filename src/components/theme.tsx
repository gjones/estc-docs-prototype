const defaultTheme = {
  colours: {
    light_primary: `#0077CC`,
    light_accent: `#F04E98`,
    light_success: `#00BFB3`,
    light_warning: `#FEC514`,
    light_danger: `#BD271E`,
    light_emptyShade: `#FFFFFF`,
    light_lightestShade: `#F5F7FA`,
    light_pageBackground: `#FAFBFD`,
    light_lightShade: `#D3DAE6`,
    light_mediumShade: `#98A2B3`,
    light_darkShade: `#69707D`,
    light_darkestShade: `#343741`,
    light_fullShade: `#000000`,

    dark_primary: `#36A2EF`,
    dark_accent: `#F68FBE`,
    dark_success: `#7DDED8`,
    dark_warning: `#F3D371`,
    dark_danger: `#F86B63`,
    dark_emptyShade: `#1D1E24`,
    dark_lightestShade: `#25262E`,
    dark_pageBackground: `#141519`,
    dark_lightShade: `#343741`,
    dark_mediumShade: `#535966`,
    dark_darkShade: `#98A2B3`,
    dark_darkestShade: `#D4DAE5`,
    dark_fullShade: `#FFFFFF`,
  },
  sizes: {
    sizeXXS: `0.15rem`,
    sizeXS: `0.25rem`,
    sizeS: `0.5rem`,
    sizeM: `0.75rem`,
    baseSize: `1rem`,
    sizeML: `1.25rem`,
    sizeL: `1.5rem`,
    sizeXL: `2rem`,
    sizeXXL: `2.5rem`,
  },
  fontSizes: {
    textSmall: `0.875rem`,
    textRegular: `1rem`,
    textLarge: `1.25rem`,
    textLarger: `2.625rem`,
    textLargest: `3.25rem`,
  },
  fontWeights: {
    fontRegular: `normal`,
    fontBold: `bold`,
    fontExtraBold: `800`,
  },
  borderRadius: {
    radiusS: `0.625rem`,
    radiusM: `0.875rem`,
    radiusL: `1.125rem`,
    radiusXL: `1.75rem`,
  },
  mediaQueries: {
    largeScreens: `(min-width : 70em)`,
    mediumScreens: `(max-width : 70em)`,
    smallScreens: `(max-width : 47.5em)`,
  },
}

const light = {
  background: defaultTheme.colours.light_emptyShade,
  header: {
    background: defaultTheme.colours.light_lightestShade,
    text: defaultTheme.colours.light_emptyShade,
  },
  feature: {
    background: defaultTheme.colours.light_lightestShade,
  },
  card: {
    borderColour: defaultTheme.colours.light_lightShade,
    background: defaultTheme.colours.light_lightestShade,
  },
  footer: {
    background: defaultTheme.colours.light_primary,
  },
  text: {
    default: defaultTheme.colours.light_darkestShade,
    link: defaultTheme.colours.light_primary,
    light: defaultTheme.colours.light_darkShade,
  },
  title: {
    default: defaultTheme.colours.light_darkestShade,
    subtle: defaultTheme.colours.light_darkShade,
  },
  // ...
}

const dark = {
  background: defaultTheme.colours.dark_pageBackground,
  header: {
    background: defaultTheme.colours.dark_lightShade,
    text: defaultTheme.colours.dark_emptyShade,
  },
  feature: {
    background: defaultTheme.colours.dark_lightestShade,
  },
  card: {
    borderColour: defaultTheme.colours.dark_lightShade,
    background: defaultTheme.colours.dark_lightestShade,
  },
  footer: {
    background: defaultTheme.colours.dark_primary,
  },
  text: {
    default: defaultTheme.colours.dark_darkestShade,
    link: defaultTheme.colours.dark_primary,
    light: defaultTheme.colours.dark_darkShade,
  },
  title: {
    default: defaultTheme.colours.dark_darkestShade,
    subtle: defaultTheme.colours.dark_mediumShade,
  },
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }
