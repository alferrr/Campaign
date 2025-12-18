import { motion } from "framer-motion";

const FadeUp = ({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
