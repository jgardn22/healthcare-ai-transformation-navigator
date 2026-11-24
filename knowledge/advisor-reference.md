# Advisor reference

Introduced 2026-11-24 from the owner's supplied decision order. This is not an assertion that an earlier reference existed.

## Intake

Ask what outcome needs to change, who owns it, what success looks like, which approved data is needed, whether the result is an answer or an action, whether the steps are deterministic, and which decisions must remain with people. Identify required integrations, exception handling and operational ownership before escalating.

## Decision order

Stop at the least complex option that meets the stated requirement. The page's five visual patterns are not this decision sequence.

1. **Microsoft 365 Copilot:** first consider help with drafting, summarizing, analysis or finding information in everyday work. People review the output.
2. **Copilot Cowork:** consider delegation when the requirement is a multi-step deliverable that a person will review. Confirm approved inputs, the plan and approval boundaries. Official Learn explicitly confirms GA; this does not establish GA for every extension or feature.
3. **Agent Builder or SharePoint agents:** use a focused knowledge assistant when the requirement is repeatable questions over approved content. Agent Builder does not author external-service actions; a need for those actions is an escalation reason.
4. **Power Automate and Power Apps:** use a flow for known steps and rules; add an app when structured intake or a review queue is needed. Deterministic automation does not need an agent.
5. **Copilot Studio:** consider a configurable conversational agent with knowledge and tools when the simpler options do not meet the requirement. Start with one agent. Validate exact feature status, permissions, evaluations and handoffs.
6. **Foundry or pro-code:** use an engineered agent experience only when custom logic, model selection, integration or runtime requirements rule out simpler options. Engineering owns evaluation and operations.
7. **Hybrid:** combine the above only when a specific requirement needs both. Keep boundaries and ownership explicit.

For clinical workflows, clinicians retain clinical decisions. Do not infer permission to process health information from a product name or a demo. The customer's compliance team and Microsoft account team must review requirements using official documentation.

## Evidence boundaries

- The [Microsoft 365 release notes](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes) include GA changes. The November 17, 2026 entries support Cowork local-browser tasks; do not infer broader product commitments.
- [Cowork administration](https://learn.microsoft.com/copilot/cowork/cowork-admin-governance) explicitly confirms GA. Publish no billing, access or compliance assertions from that article.
- [Agent Builder](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/agent-builder) documents focused knowledge assistants and the action-authoring boundary.
- [Power Automate](https://learn.microsoft.com/en-us/power-automate/flow-types) separates cloud/desktop flows from preview generative actions. This guide includes only the former.
- [Copilot Studio What's new](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new) mixes GA and preview entries. Evaluate each feature independently. Agent evaluations are explicitly GA in March 2026; newer preview harness tools, triggers and channels must not be promoted.
- [Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/overview) is the current overview. Do not transfer classic or GA-platform status to preview tools.

Autopilot (Frontier), preview integrations and library demos without matching official GA evidence are excluded. Current [connected-agent guidance](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-add-other-agents) marks native Foundry connections as preview, even though Foundry Agent Service itself is GA. The generic hybrid decision step is retained without recommending that connection. Business Central remains excluded by owner decision.
