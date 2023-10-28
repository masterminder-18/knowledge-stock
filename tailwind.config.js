import { config } from './lib/server/config'
import { FONTS_SANS, FONTS_SERIF } from './consts'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: config.lightBackround || '#ffffff'
        },
        night: {
          DEFAULT: config.lightBackground || '#111827'
        }
      },
      fontFamily: {
        sans: FONTS_SANS,
        serif: FONTS_SERIF,
        noEmoji: [
          '"IBM Plex Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
