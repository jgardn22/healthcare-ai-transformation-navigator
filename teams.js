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
};
