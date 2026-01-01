/**

Partner Vetting & Scoring Logic

Categorizes potential partners in African markets based on trust and reach. */

const PARTNER_TYPES = { ACCOUNTANT: { trust_score: 0.9, reach: "High", tier: "Gold" }, TECH_CONSULTANT: { trust_score: 0.8, reach: "Medium", tier: "Silver" }, MARKETING_AGENCY: { trust_score: 0.4, reach: "High", tier: "Bronze" } };

function evaluatePartner(data) { const type = data.industry_type; const yearsInMarket = data.years_active;

let baseScore = PARTNER_TYPES[type] ? PARTNER_TYPES[type].trust_score : 0.2;

// Weighted logic for relationship-driven markets
if (yearsInMarket > 5) baseScore += 0.1;
if (data.has_local_office) baseScore += 0.2;

return {
    is_approved: baseScore > 0.6,
    recommended_tier: baseScore > 0.8 ? "Strategic" : "Standard",
    commission_rate: baseScore > 0.8 ? "25%" : "15%"
};


}