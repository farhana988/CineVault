import SectionHeader from "@/components/shared/SectionHeader";
const privacySections = [
  {
    title: "Information We Collect",
    content:
      "We may collect information such as your name, email address, and browsing activity to improve your experience on our site.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Your information is used to personalize content, send updates, and improve our services. We do not sell your personal data to third parties.",
  },
  {
    title: "Security",
    content:
      "We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or destruction.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page.",
  },
];
const PrivacyPage = () => {
  return (
    <>
      <SectionHeader
        title="Privacy Policy"
        subtitle="Learn how CineVault collects, uses, and protects your personal information."
      />
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        At CineVault, we respect your privacy and are committed to protecting
        your personal information. This Privacy Policy explains how we collect,
        use, and safeguard your data when you visit our website.
      </p>

      <div className="space-y-6 mt-6">
        {privacySections.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </>
  );
};

export default PrivacyPage;
