import { signIn, useSession } from "next-auth/client";
import styles from "./styles.module.scss";

interface ISubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {
  const [session] = useSession();

  const handleSubscribe = () => {
    if (!session) {
      signIn("github");
      return;
    }
  };

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
