import React from 'react';
import Image from 'next/image';

// Article type definition removed

const ArticlePage = () => {
  const article = {
    title: "How Recent SEC Pronouncements Will Shape SOX Compliance in 2025",
    date: "Feb 20, 2025",
    content: `The Securities and Exchange Commission (SEC) has made several key pronouncements over the past year that will significantly impact SOX compliance requirements going forward. As we head into fiscal year 2025, companies should be aware of how these new SEC priorities and rules will expand the scope of their SOX compliance obligations.

SEC Announces 2025 Examination Priorities

In October 2024, the SEC's Division of Examinations released its official examination priorities for fiscal year 2025. The Division highlighted an increased focus on emerging risk areas including:

• Fiduciary duty and standards of conduct
• Cybersecurity controls and incident reporting
• Artificial intelligence and automated investment tools
• Crypto assets and digital currencies

To meet SOX requirements, companies will need to strengthen their compliance programs and internal controls in these key domains. Expect the SEC to closely scrutinize policies, procedures, and governance practices related to safeguarding customer data, managing conflicts of interest, and overseeing third-party vendors.

New 4-Day Reporting Window for Cybersecurity Incidents

Expanding on its cybersecurity emphasis, in July 2023 the SEC adopted rules requiring companies to report material cybersecurity incidents within just four business days of determining their impact. This tight timeline means companies must have robust processes in place to rapidly investigate potential breaches, assess their materiality, and escalate reporting as needed to meet SOX section 409 disclosure controls.

More Frequent Net Capital Computations

The SEC also amended rule 15c3-3, the Customer Protection Rule, in December 2024. Certain broker-dealers will now need to calculate their net cash owed to customers on a daily instead of weekly basis. Affected firms must enhance their SOX controls and financial reporting cadence to generate these net capital computations every business day.

Crackdown on Crypto Market Manipulation

A series of recent SEC enforcement actions against crypto market manipulators signals heightened attention on this sector. Companies dealing with digital assets should expect the SEC to closely examine their SOX compliance, likely leading to stricter requirements around financial controls, risk disclosures, and asset custody.

Annual Cybersecurity Disclosure Mandate

Starting in 2023, the SEC began requiring companies to provide annual disclosures on their cybersecurity risk management, strategy, and governance. To fulfill this obligation, SOX compliance teams will need to work hand-in-hand with IT and InfoSec to document cyber risk assessments, incident response plans, and board oversight of data security.

Implications for SOX Compliance and Reporting

The SEC's heightened focus on emerging risks like cybersecurity, AI, and crypto assets will require companies to significantly expand the scope and rigor of their SOX compliance programs:

• Broader Risk Assessments: SOX risk assessments will need to systematically identify and evaluate cyber threats, AI/algorithm risks, and crypto asset vulnerabilities that could materially impact financial reporting.

• Enhanced Control Activities: Companies will need to design and test new internal controls to mitigate the risks posed by cyber incidents, AI tools, and crypto markets.

• More Extensive and Frequent Reporting: The new SEC rules will require companies to report material cyber incidents within 4 days and provide annual disclosures on cyber risk management.

• Integrated Compliance Efforts: Addressing this breadth of new requirements will demand greater coordination between financial reporting, IT, security, and compliance functions.

• Independent Assurance: As companies rely more heavily on third-party vendors for IT services, AI capabilities, and crypto solutions, SOX compliance will hinge on obtaining independent assurance over these providers' controls.

• Continuous Improvement: With the SEC's exam priorities signaling continued scrutiny of cybersecurity, AI ethics, and crypto safeguards, SOX compliance must become a continuous improvement exercise.

Sources:
1. https://www.auditboard.com/blog/sox-cybersecurity-compliance/
2. https://kpmg.com/us/en/articles/2024/sec-2025-priorities-examinations-and-perspectives-reg-alert.html
3. https://www.sec.gov/newsroom/press-releases/2024-172`
  };

  const subtitles = [
    'SEC Announces 2025 Examination Priorities',
    'New 4-Day Reporting Window for Cybersecurity Incidents',
    'More Frequent Net Capital Computations',
    'Crackdown on Crypto Market Manipulation',
    'Annual Cybersecurity Disclosure Mandate',
    'Implications for SOX Compliance and Reporting'
  ];

  const renderContent = (content: string) => {
    return content.split('\n\n').map((section, index) => {
      // Check if section is a subtitle
      if (subtitles.includes(section.trim())) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            {section}
          </h2>
        );
      }

      // Check if section contains bullet points
      if (section.includes('•')) {
        const items = section.split('•').filter(item => item.trim());
        return (
          <ul key={index} className="list-disc pl-8 my-6 space-y-3">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-800 text-lg">
                {item.trim()}
              </li>
            ))}
          </ul>
        );
      }

      // Handle source links
      if (section.startsWith('Sources:')) {
        const links = section.split('\n').slice(1);
        return (
          <div key={index} className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Sources</h2>
            <ul className="space-y-2">
              {links.map((link, linkIndex) => {
                const [number, url] = link.split('. ');
                return (
                  <li key={linkIndex} className="text-lg">
                    {number}. <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                      {url}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }

      // Regular paragraphs
      return (
        <p key={index} className="text-lg text-gray-800 mb-6 leading-relaxed">
          {section}
        </p>
      );
    });
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Increased height from h-48 to h-56 */}
      <div className="relative h-56 mb-8 rounded-lg overflow-hidden bg-white shadow-sm">
        <Image
          src="/images/sec-logo4.png"
          alt="SEC Logo"
          fill
          className="object-contain p-4"
          priority
        />
      </div>
      
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{article.title}</h1>
      <div className="text-sm text-gray-500 mb-8">{article.date}</div>
      <div className="prose prose-lg max-w-none">
        {renderContent(article.content)}
      </div>
    </article>
  );
};

export default ArticlePage;