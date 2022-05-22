import { AuthProvider } from "../hooks/useAuth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // This is called a HOC (Higher order component)
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
