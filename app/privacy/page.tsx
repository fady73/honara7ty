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
      <article class="card">
          <h1>Privacy Policy</h1>
          <p>Effective date: April 24, 2026</p>

          <p>
            This Privacy Policy applies to the Honara7ty mobile application
            (&quot;Application&quot;), provided by fady khayrat (&quot;Service
            Provider&quot;) as a free service. The Application is provided for
            use as is.
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you use the Application, we may collect and process the
            following categories of information:
          </p>
          <ul>
            <li>
              Account information, such as your name, email address, and profile
              details
            </li>
            <li>Authentication data used to sign you in securely</li>
            <li>
              Devotional data, such as reminder settings, reading plans, reading
              activity, devotional tracking data, prayer notes, and reflections
            </li>
            <li>
              Device and app information, such as device type, operating system,
              app version, country/region, and general diagnostic information
            </li>
            <li>
              Usage information, such as screens viewed, features used,
              interactions within the app, and time spent using the Application
            </li>
            <li>
              Crash, error, and performance data to help diagnose issues and
              improve reliability
            </li>
          </ul>

          <p>
            The Application does not collect precise location information from
            your mobile device for its core functionality.
          </p>

          <h2>How We Use Information</h2>
          <p>
            We use information collected through the Application to:
          </p>
          <ul>
            <li>Create and manage your account</li>
            <li>Authenticate you securely</li>
            <li>Save your devotional preferences, reminders, and reading plans</li>
            <li>Store prayer notes, reflections, and devotional activity</li>
            <li>Send reminders and notifications when enabled by you</li>
            <li>
              Monitor app performance, diagnose crashes and errors, and improve
              reliability
            </li>
            <li>
              Understand how users interact with the Application and improve the
              user experience
            </li>
            <li>Maintain security and prevent abuse</li>
          </ul>

          <h2>Analytics, Diagnostics, and Session Replay</h2>
          <p>
            The Application uses analytics, diagnostics, and session replay
            tools to understand app reliability and user experience. These tools
            may collect information such as:
          </p>
          <ul>
            <li>App usage and interaction data</li>
            <li>Screen navigation and feature usage</li>
            <li>Device and app diagnostics</li>
            <li>Crash logs, error details, and performance data</li>
            <li>
              Session-related data to help replay and understand app behavior
            </li>
          </ul>
          <p>
            The Application currently uses services such as Sentry and
            Microsoft Clarity for error monitoring, diagnostics, analytics, and
            session replay. These services may receive device, usage, and
            diagnostic data in order to provide their services.
          </p>
          <p>
            Where supported by these services, sensitive content is intended to
            be masked or sanitized. However, no system can guarantee perfect
            masking in every situation, so users should avoid entering
            unnecessary highly sensitive personal information into free-text
            fields.
          </p>

          <h2>Third-Party Services</h2>
          <p>The Application may use third-party services, including:</p>
          <ul>
            <li>Google Play Services</li>
            <li>Supabase</li>
            <li>Google Sign-In</li>
            <li>Sentry</li>
            <li>Microsoft Clarity</li>
          </ul>
          <p>
            These third parties may process information in accordance with their
            own privacy policies.
          </p>

          <h2>Notifications</h2>
          <p>
            If you enable notifications, the Application may use your
            notification preferences and reminder settings to send devotional
            reminders and other relevant app notifications.
          </p>

          <h2>Data Retention</h2>
          <p>
            The Service Provider retains user-provided account and app data for
            as long as needed to provide the Application and for a reasonable
            period afterward, unless a longer retention period is required by
            law or needed for legitimate operational purposes.
          </p>
          <p>
            Analytics, diagnostics, and session replay data may be retained by
            third-party providers according to their own retention policies.
          </p>
          <p>
            To request deletion of your account or personal data, contact:
            fadykhayrat@gmail.com
          </p>

          <h2>Data Security</h2>
          <p>
            The Service Provider uses reasonable administrative, technical, and
            organizational safeguards to protect information processed through
            the Application. Data transmitted through third-party services is
            expected to be encrypted in transit where supported by those
            providers.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            The Application is not intended for children under 13, and the
            Service Provider does not knowingly collect personal information
            from children under 13. If you believe a child under 13 has
            provided personal information, contact fadykhayrat@gmail.com so
            appropriate action can be taken.
          </p>

          <h2>Your Choices</h2>
          <p>
            You may choose whether to enable notifications in your device
            settings and within the Application where applicable. You may also
            stop all collection of information by uninstalling the Application.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            This Privacy Policy may be updated from time to time. The Service
            Provider will update the effective date above when changes are made.
            Continued use of the Application after changes become effective
            means you accept the updated Privacy Policy.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy or data practices
            related to the Application, contact:
          </p>
          <p>fadykhayrat@gmail.com</p>
        </article>
        </div>
      </main>
    </>
  )
}
