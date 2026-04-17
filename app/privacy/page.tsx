import Link from "next/link"

export const metadata = {
  title: "Honara7ty - Privacy Policy",
  description: "Privacy policy for the Honara7ty mobile application.",
}

export default function Privacy() {
  return (
    <>
      <header className="privacy-header">
        <div className="wrap">
          <Link href="/">Honara7ty</Link>
        </div>
      </header>

      <main className="privacy-main">
        <div className="wrap">
          <article className="card">
            <h1>Privacy Policy</h1>
            <p>Effective date: April 12, 2026</p>

            <p>
              This privacy policy applies to the Honara7ty Application for mobile
              devices created by fady khayrat as a free service. This service is
              intended for use as is.
            </p>

            <h2>Information Collection and Use</h2>
            <p>
              The Application collects information when you download and use it.
              This information may include:
            </p>
            <ul>
              <li>Your device IP address</li>
              <li>Pages or screens you visit and the time spent on them</li>
              <li>The time spent using the Application</li>
              <li>The operating system used on your mobile device</li>
            </ul>

            <p>
              The Application does not collect precise location information from
              your mobile device.
            </p>

            <p>
              For a better experience, the Service Provider may ask you to provide
              personally identifiable information, including your name, email
              address, profile details, devotional reminder time, prayer notes,
              reflections, reading activity, and devotional tracking data.
            </p>

            <h2>How Information Is Used</h2>
            <ul>
              <li>Create and manage your account</li>
              <li>Authenticate you securely</li>
              <li>Save devotional preferences and reading plans</li>
              <li>Send daily reminders if notifications are enabled</li>
              <li>Store prayer notes, reflections, and devotional activity</li>
              <li>Improve the reliability and user experience of the Application</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>The Application may use third-party services, including:</p>
            <ul>
              <li>Google Play Services</li>
              <li>Supabase</li>
              <li>Google Sign-In</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              The Service Provider retains user-provided data for as long as you
              use the Application and for a reasonable time afterward. To request
              deletion of your data, contact fadykhayrat@gmail.com.
            </p>

            <h2>Children</h2>
            <p>
              The Application is not intended for children under 13, and the
              Service Provider does not knowingly collect personal information
              from children under 13.
            </p>

            <h2>Security</h2>
            <p>
              The Service Provider uses reasonable physical, electronic, and
              procedural safeguards to protect information processed and
              maintained through the Application.
            </p>

            <h2>Changes</h2>
            <p>
              This Privacy Policy may be updated from time to time. Continued use
              of the Application after changes are posted means you accept the
              updated policy.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about this Privacy Policy, contact:
              fadykhayrat@gmail.com
            </p>
          </article>
        </div>
      </main>
    </>
  )
}
