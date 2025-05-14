import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
          <Toaster richColors position="top-center" />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
