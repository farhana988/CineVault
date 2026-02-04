import SectionHeader from "@/components/shared/SectionHeader";

const termsSections = [
  {
    title: "Use of Site",
    content:
      "CineVault content is for personal, non-commercial use only. You agree not to redistribute or reproduce our content without permission.",
  },
  {
    title: "User Accounts",
    content:
      "If you create an account, you are responsible for maintaining the confidentiality of your login credentials.",
  },
  {
    title: "Limitation of Liability",
    content:
      "CineVault is not liable for any direct or indirect damages resulting from the use of our website.",
  },
  {
    title: "Changes",
    content:
      "We may modify these terms at any time. Continued use of the site constitutes acceptance of the updated terms.",
  },
];

const TermsPage = () => {
  return (
    <>
      <SectionHeader
        title="Terms of Service"
        subtitle="Please read these terms carefully before using CineVault."
      />

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        By accessing CineVault, you agree to comply with these Terms of Service.
      </p>

      <div className="space-y-6 mt-6">
        {termsSections.map((section, index) => (
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

export default TermsPage;
