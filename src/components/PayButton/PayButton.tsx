import { useAccount, useSendTransaction } from "wagmi";
import { sepolia } from "viem/chains";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { parseUnits } from "viem";
import styles from "./PayButton.module.css";
import { useState, useEffect } from "react";
interface PayButtonProps {
  price: number;
}

const PayButton: React.FC<PayButtonProps> = ({ price }) => {
  const { sendTransactionAsync } = useSendTransaction();
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const [started, setStarted] = useState(false);
  const [errors, setErrors] = useState("");
  const [completed, setCompleted] = useState(false);

  const handlePayment = async () => {
    try {
      setErrors("");
      setStarted(true);
      if (!address) {
        await open();
      }

      const weiPrice = parseUnits(price.toString(), 18);
      const data = await sendTransactionAsync({
        to: "0x342F6824339fAd0a37eEAD57e590DC97fbCbE4aE",
        value: weiPrice,
        chainId: sepolia.id,
      });
      setCompleted(true);
      console.log("Transaction data:", data);
    } catch (error) {
      console.log(error);
      setStarted(false);
      setErrors("Payment failed. Please try again.");
    } finally {
      setStarted(false);
    }
  };
  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        setCompleted(false);
        setErrors("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <>
      <div className={styles.container}>
        {!completed && (
          <button
            disabled={started}
            className={styles.payButton}
            onClick={handlePayment}
          >
            {started ? "Confirming..." : "Pay Now"}
          </button>
        )}
        {completed && (
          <p className={styles.successfulPayment}>
            Thank you for your payment.
          </p>
        )}
        {errors && <p className={styles.failedPayment}>{errors}</p>}
      </div>
    </>
  );
};

export default PayButton;
