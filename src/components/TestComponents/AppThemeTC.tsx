import './styles.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

export default function AppThemeTC() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <div className="background flex">
        <div className="block">
          <h1 className="text">App theme is now {theme}</h1>
        </div>
        <div className="block">
          <button
            className="button-green"
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
            type="button"
          >
            Switch Theme
          </button>
        </div>
      </div>
    </div>
  );
}
