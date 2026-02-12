import { Link, useNavigate } from "react-router-dom";
import { useWallet } from "../wallet/connectWallet"; // Import your logic
import "./home.css";

export default function Home() {
  const navigate = useNavigate();
  const { account, connectWallet } = useWallet(); // Use the hook

  // Helper to shorten address like 0x1234...abcd
  const shortenAddress = (addr) =>
    addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

  return (
    <div className="landing-page">
      <header className="welcome-section">
        <h1>Welcome to Wise Guys Casino</h1>
        {/* Added Web3 Tagline */}
        <h2>The Ultimate Web3 & Blockchain Gambling Experience!</h2>
        <p>
          Dive into a world of excitement and chance with our{" "}
          <strong>provably fair</strong> online casino, featuring Blackjack,
          Roulette, and Slot Machines. Visit our how to play pages (
          <Link className="home-links" to="/howtoplay/blackjack">
            Blackjack
          </Link>
          ,{" "}
          <Link className="home-links" to="/howtoplay/roulette">
            Roulette
          </Link>
          ,{" "}
          <Link className="home-links" to="/howtoplay/slots">
            Slots
          </Link>
          ) for all the guidance you need to get started.
        </p>
      </header>

      <div className="home-grid">
        {/* NEW WEB3 CARD */}
        <section className="card web3-benefits">
          <h2>Web3 Enabled</h2>
          <p>
            Connect your MetaMask to play with real crypto assets. Enjoy instant
            payouts, lower house edges, and complete ownership of your in-game
            assets via our secure smart contracts.
          </p>
        </section>

        <section className="card guest-access">
          <h2>Guest Access</h2>
          <p>
            As a guest, you have the freedom to play with an unlimited amount of
            money to test your skills and strategies. Your funds reset each time
            you refresh.
          </p>
        </section>

        <section className="card leaderboards">
          <h2>On-Chain Leaderboards</h2>
          <p>
            Our leaderboard page showcases the top players globally. With
            blockchain transparency, every win is verified and visible to the
            community.
          </p>
        </section>

        <section className="card blackjack-mini-game">
          <h2>Blackjack Mini-Game</h2>
          <p>
            Log in to embark on this challenge with $100 and 10 hands to
            maximize your winnings. Track your performance on your cashier page.
          </p>
        </section>
      </div>

      <div className="home-footer">
        <p className="home-end-section">
          {account
            ? `Connected as: ${shortenAddress(account)}`
            : "Connect your wallet to experience the full power of Web3 gaming."}
        </p>

        <div className="cta-buttons">
          {/* PRIMARY WEB3 BUTTON */}
          {!account ? (
            <button
              className="cta-button wallet-connect"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          ) : (
            <button
              className="cta-button play-now"
              onClick={() => navigate("/casino")}
            >
              Enter Casino
            </button>
          )}

          <button
            className="cta-button login"
            onClick={() => navigate("/account")}
          >
            User Login
          </button>

          <button
            className="cta-button guest"
            onClick={() => navigate("/casino")}
          >
            Play Guest
          </button>
        </div>
      </div>
    </div>
  );
}
