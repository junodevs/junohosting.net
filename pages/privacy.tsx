import Layout from '../components/layout'

export default function PrivacyPolicy () {
  return (
    <Layout>
      <article className="prose mx-auto">
        <h1>Privacy Policy</h1>
        <p>
          We take our customer&apos;s privacy very seriously. Information such
          as address, phone, etc. will not be given out. However, we reserve the
          right to monitor your account. We will also use the given information
          to verify you as the account holder in the event you forgot your
          password.
        </p>
        <h2>1. Automatically Logged Information</h2>
        <p>
          We use your IP address to help diagnose problems with our server and to
          administer our services. We use this information for no other reason.
        </p>
        <h2>2. Input Forms</h2>
        <p>
          Our site uses many input forms for customers to services. We collect
          sensitive information that is used only for our purpose, no third party
          receives any type of personal information from us.
          Contact information from order forms is used to get in touch with the
          customer. Billing information is collected to bill the user for services.
          Unique identifiers are collected from visitors to verify their identity.
          Demographic and profile data is collected to tailor our visitor&apos;s
          experience at our site showing them content that we think they might be
          interested in, and displaying the content according to their preferences.
        </p>
        <h2>3. Security</h2>
        <p>
          This site has security measures in place to protect the loss, misuse, and
          alteration of the information under our control. We use strong SSL
          encryption to ensure your privacy. All users are solely responsible for
          their server security as each server will be given a public IP. While we
          have our firewalls in place, we strongly encourage all clients to secure
          their servers and change passwords and never share their login information.
        </p>
        <h2>4. Third Parties</h2>
        <p>
          Information collected on this site is strictly for our use, NO EXTERNAL
          PARTIES (INDIVIDUALS OR OTHERWISE) EVER VIEW YOUR PERSONAL INFORMATION.
        </p>
      </article>
    </Layout>
  )
}
