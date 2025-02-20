import React from 'react';

// This type defines the expected parameters
type Props = {
  params: { id: string }
}

// Add this type definition
type ArticleType = {
  title: string;
  date: string;
  content: string;
}

type ArticlesDbType = {
  [key: string]: ArticleType;
}

// Mock database of articles
const articlesDb: ArticlesDbType = {
  "sec-sox-2025": {
    title: "How Recent SEC Pronouncements Will Shape SOX Compliance in 2025",
    date: "Feb 20, 2025",
    content: `The Securities and Exchange Commission (SEC) has made several key pronouncements over the past year that will significantly impact SOX compliance requirements going forward. As we head into fiscal year 2025, companies should be aware of how these new SEC priorities and rules will expand the scope of their SOX compliance obligations.

SEC Announces 2025 Examination Priorities

In October 2024, the SEC's Division of Examinations released its official examination priorities for fiscal year 2025. The Division highlighted an increased focus on emerging risk areas including:
•	Fiduciary duty and standards of conduct
•	Cybersecurity controls and incident reporting
•	Artificial intelligence and automated investment tools
•	Crypto assets and digital currencies

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

•	Broader Risk Assessments: SOX risk assessments will need to systematically identify and evaluate cyber threats, AI/algorithm risks, and crypto asset vulnerabilities that could materially impact financial reporting. This may require developing new risk assessment methodologies and involving a wider range of stakeholders across IT, InfoSec, data science, and digital innovation teams.

•	Enhanced Control Activities: Companies will need to design and test new internal controls to mitigate the risks posed by cyber incidents, AI tools, and crypto markets. This could include controls over threat detection and response, algorithm governance, and digital asset custody. Existing IT general controls and application controls will also need to be reviewed for alignment with these emerging risk areas.

•	More Extensive and Frequent Reporting: The new SEC rules will require companies to report material cyber incidents within 4 days and provide annual disclosures on cyber risk management. Broker-dealers will need to compute customer reserve requirements daily instead of weekly. This means SOX teams must implement more granular, timely, and expansive reporting processes to meet these compressed deadlines and additional disclosure mandates.

•	Integrated Compliance Efforts: Addressing this breadth of new requirements will demand greater coordination between financial reporting, IT, security, and compliance functions. SOX leaders will need to break down silos and drive integrated efforts to holistically assess risks, implement end-to-end controls, and provide unified reporting that meets multiple stakeholder needs.

•	Independent Assurance: As companies rely more heavily on third-party vendors for IT services, AI capabilities, and crypto solutions, SOX compliance will hinge on obtaining independent assurance over these providers' controls. This may require enhancing third-party risk management programs and negotiating new contract provisions to enable visibility into outsourced processes and data.

•	Continuous Improvement: With the SEC's exam priorities signaling continued scrutiny of cybersecurity, AI ethics, and crypto safeguards, SOX compliance must become a continuous improvement exercise. Companies will need to keep refining their risk assessments, controls, and reporting in lockstep with technological advancements and regulatory developments year-over-year.

Embracing this mindset of expanded scope, integrated efforts, and ongoing enhancement will be key to thriving in the SEC's evolving SOX compliance landscape. Companies that view these new requirements not as a check-the-box burden but as an opportunity to strengthen resilience, accountability, and trust will be the ones to emerge as industry leaders in 2025 and beyond.

Sources:
1. https://www.auditboard.com/blog/sox-cybersecurity-compliance/
2. https://kpmg.com/us/en/articles/2024/sec-2025-priorities-examinations-and-perspectives-reg-alert.html
3. https://www.sec.gov/newsroom/press-releases/2024-172`
  }
  // Add other articles here
};

export default function ArticlePage({ params }: Props) {
  const article = articlesDb[params.id];

  if (!article) {
    return <div className="max-w-3xl mx-auto px-4 py-16">Article not found</div>;
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="text-sm text-gray-500 mb-8">{article.date}</div>
      <div className="prose prose-lg max-w-none">
        {article.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
} 