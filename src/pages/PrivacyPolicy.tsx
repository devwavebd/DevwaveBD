import PageHeader from '../components/PageHeader';
import CTA from '../components/home/CTA';

export default function PrivacyPolicy() {
  return (
    <div id="privacy-policy-page">
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we collect, use, and protect your data at Devwave BD."
        breadcrumb="LEGAL DOCUMENTATION"
      />

      <section className="py-24 bg-brand-bg">
        <div className="custom-container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert prose-brand lg:prose-xl">
              <h2 className="text-2xl font-bold text-white mb-6">1. Introduction</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                At Devwave BD, we are committed to maintaining the trust and confidence of our visitors to our web site. In this Privacy Policy, we provide detailed information on when and why we collect personal information, how we use it, and how we keep it secure.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">2. Data Collection</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                We may collect personal information such as your name, email address, and phone number when you:
              </p>
              <ul className="list-disc pl-6 text-gray-400 mb-8 space-y-2">
                <li>Register for our newsletter</li>
                <li>Request a consultation through our contact forms</li>
                <li>Engage with our customer support</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">3. Use of Information</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                The information we collect is used to provide the services you requested, to maintain our accounts and records, and to monitor and analyze traffic for website optimization purposes. We never sell or rent your data to third parties.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">4. Cookies</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our website uses cookies to distinguish you from other users. This helps us provide you with a good experience when you browse our website and also allows us to improve our site.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">5. Your Rights</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                You have the right to request access to the personal information we hold about you and to ask for it to be corrected or deleted. If you have any questions regarding your data, please contact us at hello@devwavebd.com.
              </p>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/5 mt-16">
                <p className="text-gray-400 text-sm italic mb-0">
                  Last updated: May 16, 2026. This policy is subject to change without notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
