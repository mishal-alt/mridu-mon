import floralBannerImg from '../assets/floral-banner.jpg'

export default function Footer({ names }) {
  return (
    <footer>
      <div className="script">{names}</div>
      <p>WITH LOVE, WE INVITE YOU TO OUR WEDDING CELEBRATION</p>
      <img className="floral-banner" src={floralBannerImg} alt="" aria-hidden="true" />
      <div className="credit">
        <a
          className="credit-btn"
          href="https://www.instagram.com/zetron.tech"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow zetron.tech on Instagram"
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" />
          </svg>
          <span>Crafted by <b>zetron.tech</b></span>
          <em>Follow</em>
        </a>
      </div>
    </footer>
  )
}
