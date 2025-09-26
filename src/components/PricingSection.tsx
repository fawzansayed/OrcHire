import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Check, Zap, Star, Crown } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for small teams getting started",
      icon: Zap,
      features: [
        "5 active job campaigns",
        "Basic AI talent discovery",
        "Email outreach",
        "Standard support",
        "Basic analytics"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Ideal for growing recruitment teams",
      icon: Star,
      features: [
        "25 active job campaigns",
        "Advanced AI matching",
        "Multi-channel outreach",
        "Voice AI screening",
        "Priority support",
        "Advanced analytics",
        "Team collaboration"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Growth",
      price: "$299",
      period: "per month",
      description: "For scaling organizations",
      icon: Crown,
      features: [
        "Unlimited campaigns",
        "DNA matching",
        "Shadow interviews",
        "Candidate agents",
        "Custom integrations",
        "Dedicated success manager",
        "Custom reporting",
        "API access"
      ],
      cta: "Contact Sales",
      popular: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large enterprises with custom needs",
      icon: Crown,
      features: [
        "Everything in Growth",
        "Custom AI models",
        "White-label options",
        "Advanced security",
        "SLA guarantees",
        "24/7 phone support",
        "Custom training",
        "Dedicated infrastructure"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Voice AI Plus",
      price: "$49/month",
      description: "Advanced conversational AI interviews"
    },
    {
      name: "Insights Pro",
      price: "$99/month", 
      description: "Advanced analytics and predictive insights"
    },
    {
      name: "Talent Rediscovery",
      price: "$149/month",
      description: "AI-powered passive candidate reactivation"
    }
  ];

  return (
    <section id="pricing" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Flexible SaaS for <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Teams of Any Size</span>
          </h2>
          <p className="text-xl text-gray-600">
            Start free, scale global
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card key={plan.name} className={`p-6 border-0 shadow-lg relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-purple-500 to-blue-500' 
                      : 'bg-gradient-to-br from-gray-500 to-gray-600'
                  }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 text-sm">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0' 
                      : ''
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Add-ons */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Add-on Modules</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <Card key={addon.name} className="p-6 border-0 shadow-md text-center">
                <h4 className="font-semibold mb-2">{addon.name}</h4>
                <div className="text-lg font-bold text-purple-600 mb-2">{addon.price}</div>
                <p className="text-gray-600 text-sm">{addon.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 rounded-2xl p-12">
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Hiring?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using OrcHire to hire faster, smarter, and more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white border-0 px-8">
                Book a Demo
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}