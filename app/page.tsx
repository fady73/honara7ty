import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.png"

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="brand">
            <Image
              src={logo}
              alt="Honara7ty logo"
              width={64}
              height={64}
              priority
            />
            <strong>Honara7ty</strong>
          </div>
          <h1>Honara7ty is a mobile app for daily spiritual discipline.</h1>
          <p className="lead">
            Honara7ty helps users keep a consistent time with God through daily
            reminder scheduling, Bible reading support, prayer notes, spiritual
            reflections, and personal progress tracking.
          </p>
          <div className="actions">
            <Link href="/privacy" className="btn btn-primary">
              Privacy Policy
            </Link>
            <a
              href="mailto:fadykhayrat@gmail.com"
              className="btn btn-secondary"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main>
        <div className="wrap">
          <section className="grid">
            <article className="card">
              <h3>Account Access</h3>
              <p>
                Users can create an account with email or sign in with Google.
              </p>
            </article>
            <article className="card">
              <h3>Daily Reminder Scheduling</h3>
              <p>
                Users choose a preferred devotional time and receive reminders
                if notifications are enabled.
              </p>
            </article>
            <article className="card">
              <h3>Bible Reading and Tracking</h3>
              <p>
                Reading plans, devotional activity, and scripture progress are
                saved to the user account.
              </p>
            </article>
            <article className="card">
              <h3>Private Notes and Reflections</h3>
              <p>
                Prayer notes and spiritual reflections are stored privately for
                the signed-in user.
              </p>
            </article>
          </section>

          <section className="section card">
            <h2>About the Application</h2>
            <p>
              Honara7ty is a mobile application that supports a daily spiritual
              routine. The app is designed to help users stay consistent in their
              quiet time through scheduled reminders, Bible reading support,
              personal prayer notes, spiritual reflections, and progress
              tracking.
            </p>
            <p>
              This website is publicly accessible and does not require login. It
              exists to explain what the application does, what user data it
              processes, and where users can review the privacy policy.
            </p>
          </section>

          <section className="section split">
            <article className="card">
              <h2>What the App Does</h2>
              <ul>
                <li>Lets users sign in with email or Google</li>
                <li>Allows users to set a daily devotional reminder time</li>
                <li>Tracks reading activity and devotional progress</li>
                <li>Saves prayer notes and spiritual reflections</li>
                <li>
                  Supports profile setup and account-based personalization
                </li>
              </ul>
            </article>

            <article className="card">
              <h2>Why User Data Is Requested</h2>
              <ul>
                <li>
                  Email address and account identity are used to create and
                  secure the account
                </li>
                <li>
                  Google account data is used only for Google Sign-In
                  authentication
                </li>
                <li>Profile details help personalize the in-app experience</li>
                <li>
                  Reminder time is used to schedule devotional notifications
                  chosen by the user
                </li>
                <li>
                  Prayer notes, reflections, and reading progress are stored so
                  users can access their own spiritual history
                </li>
              </ul>
            </article>
          </section>

          <section className="section card">
            <h2>Privacy and Transparency</h2>
            <p>
              Honara7ty requests only the data needed to provide account access,
              reminder scheduling, saved devotional content, and app
              functionality. More detail is available in the privacy policy.
            </p>
            <p>
              Privacy Policy:{" "}
              <Link href="/privacy">
                Open the Honara7ty Privacy Policy
              </Link>
            </p>
          </section>

          <section className="section card">
            <h2>Application Identity</h2>
            <div className="meta">
              <p>
                <strong>App name:</strong> Honara7ty
              </p>
              <p>
                <strong>Platform:</strong> Mobile application
              </p>
              <p>
                <strong>Developer contact:</strong> fadykhayrat@gmail.com
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="wrap">
          <div className="footer-card">
            <h3>Contact</h3>
            <p>Email: fadykhayrat@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  )
}