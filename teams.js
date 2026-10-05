window.HAIN_TEAMS = {
  finance: {
    image: 'assets/finance-agentic-team.webp',
    width: 1536,
    height: 1024,
    title: 'Finance Assist Multi-Agent Team',
    subtitle: 'AI-powered finance operations assistance across Accounting, FP&A, Treasury, Tax, Procure-to-Pay, and Shared Services.',
    alt: 'Architecture diagram of the Finance Assist multi-agent team. A requestor reaches Finance Assist, the front door, which understands the request, classifies it, routes it to the best agent, orchestrates actions, monitors compliance and synthesizes the response. Eight specialized domain agents sit below it: Accounts Payable, Record to Report Close, FP&A and Reporting, Treasury and Cash Management, Tax Compliance, Procure-to-Pay, Expense and Travel, and Supplier and Vendor Management. A governance control plane and shared platform services and integrations sit underneath, with human escalation to finance teams and outcomes that matter on the right.',
    assist: {
      name: 'Finance Assist',
      line: 'Your intelligent front door to finance operations support',
      ask: 'I need help with a budget variance, an invoice, a cash forecast, a close task, or a tax question.',
      intake: ['Request intake: capture, classify and prioritize', 'Existing information? If yes, route to the agent. If no, create a new case', 'Policy and rule check: validate policies, controls and thresholds', 'Knowledge search: policies, procedures, playbooks and templates', 'Case summary: create an initial summary and a recommended path'],
      steps: ['Understand request', 'Classify and categorize', 'Route to best agent', 'Orchestrate actions', 'Monitor compliance', 'Synthesize and deliver response']
    },
    agents: [
      ['Accounts Payable Agent', ['Invoice capture and validation', '3-way match', 'Exception handling', 'Payment processing support']],
      ['Record to Report Close Agent', ['Close task management', 'Account reconciliations', 'Journal entries', 'Close checklist and certification']],
      ['FP&A and Reporting Agent', ['Budget vs actual analysis', 'Variance explanation', 'Management reporting', 'Ad-hoc financial requests']],
      ['Treasury and Cash Management Agent', ['Cash forecasting', 'Liquidity monitoring', 'Bank reconciliations', 'Investments and debt tracking']],
      ['Tax Compliance Agent', ['Tax provision support', 'Return preparation support', 'Tax research', 'Compliance calendar and filings']],
      ['Procure-to-Pay Agent', ['PO management', 'Vendor master maintenance', 'Goods receipt', 'Spend classification and analysis']],
      ['Expense and Travel Agent', ['Expense auditing', 'Receipt verification', 'Policy compliance checks', 'Reimbursement processing']],
      ['Supplier and Vendor Management Agent', ['Vendor onboarding', 'Due diligence', 'Contract compliance', 'Performance monitoring']]
    ],
    governance: ['Finance agent catalog', 'Approval workflows', 'Lifecycle management', 'Audit logging', 'Access and privilege management', 'Prompt governance', 'Finance operations oversight', 'Usage analytics'],
    systems: ['Microsoft 365 (Outlook, Teams, SharePoint)', 'Identity and access (SSO, roles, permissions)', 'ERP systems (SAP, Oracle, NetSuite, etc.)', 'Financial systems (general ledger, subledger, AR, AP)', 'Data warehouse and analytics (Snowflake, Databricks, Power BI, etc.)', 'Banking and payment networks', 'APIs and MCP connections', 'Security (Zero Trust, encryption, DLP)'],
    humans: ['Finance Operations Team', 'Controller and Accounting', 'FP&A Team', 'Treasury Team', 'Tax Team', 'Procurement Team', 'External Advisors'],
    outcomes: ['Faster cycle times', 'Reduced costs', 'Improved accuracy', 'Stronger compliance', 'Better cash and forecasts', 'Greater productivity'],
    principles: ['Secure by design', 'Governed by policy', 'Built for trust', 'Focused on people', 'Delivered at scale']
  }
  ,nursing: {
    image: 'assets/nursing-agentic-team.webp',
    width: 1536,
    height: 1022,
    title: 'Nursing Operations Assist Multi-Agent Team',
    subtitle: 'AI-powered nursing workflow assistance across bedside care, clinical documentation, policy guidance, patient education, safety, training, and care coordination.',
    alt: 'Architecture diagram of the Nursing Operations Assist multi-agent team. A nurse or requestor reaches Nursing Operations Assist, the front door, which understands the request, assesses urgency and context, routes it to the best agent, orchestrates actions, monitors clinical safety and compliance, and synthesizes the response. Specialized domain agents sit below it, including Clinical Triage, Clinical Documentation, Clinical Policy, Nursing Knowledge, Patient Education, Skin and Wound Care, Care Plan, Behavioral Health and Suicide Risk, Nursing Training, and Policy and Evidence. A governance control plane and shared platform services and integrations sit underneath, with human escalation to bedside nurses, charge nurses, nurse educators, clinical informatics, care managers and clinical leadership, and outcomes that matter on the right.',
    assist: {
      name: 'Nursing Operations Assist',
      line: 'Your intelligent front door to nursing support',
      ask: 'I need help with a patient assessment, documentation, a policy question, education materials, or care planning support.',
      intake: ['Nursing request intake: capture, classify and prioritize', 'Existing information? If yes, route to the agent. If no, create a new case', 'Clinical safety check: screen for urgency, risk and required escalation', 'Knowledge search: policies, procedures, care guidelines and patient context', 'Case summary: create an initial summary and a recommended path'],
      steps: ['Understand request', 'Assess urgency and context', 'Route to best agent', 'Orchestrate actions', 'Monitor clinical safety and compliance', 'Synthesize and deliver response']
    },
    agents: [
      ['Clinical Triage Agent', ['Patient assessment support', 'Triage guidance', 'Escalation pathways', 'EHR-ready summaries']],
      ['Clinical Documentation Agent', ['Nursing note drafting', 'Shift summaries', 'Handoff preparation', 'Documentation quality checks']],
      ['Clinical Policy Agent', ['Policy and procedure lookup', 'Step-by-step guidance', 'Policy comparison', 'Cited answers']],
      ['Nursing Knowledge Agent', ['Clinical Q&A', 'Best practices', 'Care protocols', 'Evidence-based recommendations']],
      ['Patient Education Agent', ['Tailored education materials', 'Teach-back validation', 'Multilingual content', 'Discharge instructions']],
      ['Skin and Wound Care Agent', ['Wound image analysis', 'Dressing recommendations', 'Care protocols', 'Healing progress tracking']],
      ['Care Plan Agent', ['Care plan recommendations', 'Goals of care support', 'Discharge planning', 'Care coordination']],
      ['Behavioral Health and Suicide Risk Agent', ['C-SSRS workflow guidance', 'Risk assessment tools', 'Escalation pathways', 'Documentation support']],
      ['Nursing Training Agent', ['Onboarding support', 'Skills checklists', 'Competency validation', 'Continuing education']],
      ['Policy and Evidence Agent', ['Monitor new evidence', 'Crosswalk to policies', 'Identify practice changes', 'Summarize impact']]
    ],
    governance: ['Agent catalog', 'Approval workflows', 'Lifecycle management', 'Audit logging', 'Clinical governance', 'Prompt governance', 'Maker oversight', 'Usage analytics'],
    systems: ['Microsoft 365 (Teams, Outlook, SharePoint)', 'Identity and access (SSO, roles, permissions)', 'EHR and clinical systems (Epic, Cerner, MEDITECH, etc.)', 'Clinical knowledge bases (guidelines, drug references, etc.)', 'Policies and procedures (intranet, nursing policies, care protocols)', 'APIs and MCP connections', 'Security (Zero Trust, encryption, DLP)'],
    humans: ['Bedside Nurses', 'Charge Nurses', 'Nurse Educators', 'Clinical Informatics', 'Care Managers', 'Clinical Leadership'],
    outcomes: ['Reduced cognitive burden', 'Faster clinical guidance', 'Standardized care', 'Improved patient education', 'Stronger compliance', 'Higher nursing productivity'],
    principles: ['Secure by design', 'Governed by policy', 'Built for trust', 'Focused on people', 'Delivered at scale']
  },
  hr: {
    image: 'assets/hr-agentic-team.webp',
    width: 1536,
    height: 1024,
    title: 'Employee Self-Service Multi-Agent Team',
    subtitle: 'AI-powered assistance across HR, IT, Clinical, Finance, and Shared Services.',
    alt: 'Architecture diagram of the Employee Self-Service multi-agent team. An employee reaches Employee Assist, the front door, which understands intent, routes it to the best agent, orchestrates actions, monitors and ensures compliance, and synthesizes the response. Eight specialized domain agents sit below it: HR, IT, Clinical Knowledge, Finance, Travel, Policy, Calendar, and Employee Communications. A governance control plane and shared platform services and integrations sit underneath, with human escalation to the HR service desk, IT support, clinical informatics, finance operations and the compliance office, and outcomes that matter on the right.',
    assist: {
      name: 'Employee Assist',
      line: 'Your intelligent front door to employee support',
      ask: 'I have a question about my benefits, need IT access, or want to understand a clinical policy.',
      intake: ['Employee or business requests a capability', 'Existing agent found? If yes, route to the agent. If no, submit a use case', 'COE review: assess need, duplication, risk and alignment', 'New agent development: build, test, govern and deploy', 'Publish to the agent catalog: available for reuse and discovery'],
      steps: ['Understand intent', 'Route to best agent', 'Orchestrate actions', 'Monitor and ensure compliance', 'Synthesize and deliver response']
    },
    agents: [
      ['HR Agent', ['Benefits and eligibility', 'PTO and time off', 'Policies and handbook', 'Onboarding']],
      ['IT Agent', ['Access and accounts', 'Passwords and MFA', 'Device support', 'Software and tools']],
      ['Clinical Knowledge Agent', ['Nursing policies', 'Clinical protocols', 'Procedure guidance', 'Pathology references']],
      ['Finance Agent', ['Expenses and travel', 'Per diem and allowances', 'GL coding and policy', 'Budget information']],
      ['Travel Agent', ['Flight and hotel booking', 'Travel policy', 'Approvals workflow', 'Itinerary changes']],
      ['Policy Agent', ['Enterprise policies', 'Interpret policy', 'Compliance Q&A', 'Exception guidance']],
      ['Calendar Agent', ['Check availability', 'Schedule meetings', 'Room resources', 'Hold time and invite']],
      ['Employee Communications Agent', ['Announcements', 'Change communications', 'Benefits reminders', 'Campaign delivery']]
    ],
    governance: ['Agent catalog', 'Approval workflows', 'Lifecycle management', 'Audit logging', 'Data classification', 'Prompt governance', 'Maker oversight', 'Usage analytics'],
    systems: ['Microsoft 365 (Teams, Outlook, SharePoint)', 'Identity and access (SSO, roles)', 'ITSM (ServiceNow)', 'Clinical systems (EHR, LIS, etc.)', 'Finance systems (ERP, AP, etc.)', 'Knowledge bases and document repositories', 'APIs and MCP connections', 'Security (Zero Trust, encryption)'],
    humans: ['HR Service Desk', 'IT Support', 'Clinical Informatics', 'Finance Operations', 'Compliance Office'],
    outcomes: ['Faster resolutions', 'Better experience', 'Operational efficiency', 'Risk and compliance', 'Scalable innovation'],
    principles: ['Secure by design', 'Governed by policy', 'Built for trust', 'Focused on people', 'Delivered at scale']
  },
  legal: {
    image: 'assets/legal-agentic-team.webp',
    width: 1536,
    height: 1024,
    title: 'Legal Assist Multi-Agent Team',
    subtitle: 'AI-powered legal operations assistance across Legal, Compliance, Privacy, Governance, Investigations, and Contract Management.',
    alt: 'Architecture diagram of the Legal Assist multi-agent team. A requestor reaches Legal Assist, the front door, which understands the request, classifies the matter, routes it to the best agent, orchestrates actions, monitors compliance and synthesizes the response. Eight specialized domain agents sit below it: Legal Intake and Matter, Contract Operations, Contract Review, Outside Counsel, Privacy and Data Rights, Compliance Monitoring, Legal Hold and Investigations, and Governance and Entity. A governance control plane and shared platform services and integrations sit underneath, with human escalation to the legal operations team, corporate counsel, privacy office, compliance office, contracts team and external counsel, and outcomes that matter on the right.',
    assist: {
      name: 'Legal Assist',
      line: 'Your intelligent front door to legal operations support',
      ask: 'I need help with a contract review, an outside counsel invoice, a privacy request, or a compliance matter.',
      intake: ['Legal request intake: capture, classify and prioritize', 'Existing information? If yes, route to the agent. If no, create a new matter', 'Conflict and eligibility: conflicts check, eligibility and jurisdiction', 'Knowledge search: policies, templates, playbooks and precedents', 'Case summary: create an initial summary and a recommended path'],
      steps: ['Understand request', 'Classify matter', 'Route to best agent', 'Orchestrate actions', 'Monitor compliance', 'Synthesize and deliver response']
    },
    agents: [
      ['Legal Intake and Matter Agent', ['Legal request intake', 'Matter creation', 'Classification and triage', 'SLA management']],
      ['Contract Operations Agent', ['Contract intake', 'Metadata extraction', 'Renewal tracking', 'Obligation monitoring']],
      ['Contract Review Agent', ['Clause comparison', 'Redline analysis', 'Deviation detection', 'Template validation']],
      ['Outside Counsel Agent', ['Invoice audits', 'Billing guideline checks', 'Spend analytics', 'Budget tracking']],
      ['Privacy and Data Rights Agent', ['DSAR coordination', 'Record collection', 'Redaction workflow', 'Response tracking']],
      ['Compliance Monitoring Agent', ['Regulatory updates', 'Policy mapping', 'Control monitoring', 'Remediation tracking']],
      ['Legal Hold and Investigations Agent', ['Hold notices', 'Custodian tracking', 'Evidence collection', 'Investigation timelines']],
      ['Governance and Entity Agent', ['Board governance', 'Entity records', 'Filing calendars', 'IP and statutory deadlines']]
    ],
    governance: ['Legal agent catalog', 'Approval workflows', 'Lifecycle management', 'Audit logging', 'Privilege management', 'Prompt governance', 'Legal operations oversight', 'Usage analytics'],
    systems: ['Microsoft 365 (Outlook, Teams, SharePoint)', 'Identity and access (SSO, roles, permissions)', 'Contract lifecycle management systems', 'Matter management systems', 'E-billing platforms', 'Document repositories', 'Regulatory sources (laws, regulations, agencies)', 'APIs and MCP connections', 'Security (Zero Trust, encryption, DLP)'],
    humans: ['Legal Operations Team', 'Corporate Counsel', 'Privacy Office', 'Compliance Office', 'Contracts Team', 'External Counsel'],
    outcomes: ['Faster matter resolution', 'Reduced outside counsel spend', 'Better contract compliance', 'Stronger regulatory readiness', 'Improved auditability', 'Protected legal accountability'],
    principles: ['Secure by design', 'Governed by policy', 'Built for trust', 'Focused on people', 'Delivered at scale']
  }
};
