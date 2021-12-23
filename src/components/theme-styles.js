export const ThemeColors = {
  MainBlue: '#0085f9',
  SecondBlue: '#0E67D0',
  ThirdBlue: '#0E4595',
  TextBlack: '#000',
  TextNutralBlack: '#1E262D',
  IconBlue: '#0084f6',
  MainWhite: '#fff',
  BGGrey: '#E6ECEF',
  BGNutralGray: '#F6F8FA',
  TextNutralGray: '#4F6773',
  DarkBlue: '#124258',
  TextGrey: '#8DA2AC',
  BorderGrey: '#CCD8DD',
  Orange: '#EE6A00',
  OrangeHover: '#c15a09'
};

export const ThemeElements = {
  rootBlockProps: {
    marginBottom: '145px'
  },
  rootMobileBlockProps: {
    marginBottom: '16px'
  },
  borderMain: '1px solid ' + ThemeColors.BorderGrey,
  border: '1px solid ' + ThemeColors.BGGrey,
  important: '!important'
};

export const AlignElements = {
  center: {
    display: 'flex',
    justifyContent: 'center'
  }
};
export const ThemeFontStyles = {
  picTitle1624Light: '16px/24px MullerLight, sans-serif',
  fontMuller14height24: '14px/24px MullerRegular, sans-serif'
};

export const ThemeClasses = {
  connectivityClasses: {
    imageItem: {
      height: '85px',
      maxWidth: '210px',
      margin: '25px 40px 0 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      '@media (max-width: 991px)': {
        margin: '10px 10px'
      }
    }
  }
};
