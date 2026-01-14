import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, Award, ArrowRight, CheckCircle, Calendar, Zap, Gift, BarChart3, Shield } from 'lucide-react';

export default function XMElite10Promo() {
  const [activeTab, setActiveTab] = useState('rebates');

  const rebateExamples = [
    {
      trader: "Conservative Trader",
      capital: "$1,000",
      volume: "50 lots/month",
      instrument: "Gold (XAUUSD)",
      calculation: "50 lots × $5",
      monthly: "$250",
      annual: "$3,000",
      roi: "25%"
    },
    {
      trader: "Active Trader",
      capital: "$5,000",
      volume: "200 lots/month",
      instrument: "Gold (XAUUSD)",
      calculation: "200 lots × $5",
      monthly: "$1,000",
      annual: "$12,000",
      roi: "240%"
    },
    {
      trader: "Professional",
      capital: "$10,000",
      volume: "500 lots/month",
      instrument: "Gold (XAUUSD)",
      calculation: "500 lots × $5",
      monthly: "$2,500",
      annual: "$30,000",
      roi: "300%"
    }
  ];

  const features = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Unlimited Daily Rebates",
      description: "Get paid every 24 hours with NO caps. The more you trade, the more you earn.",
      highlight: "$5/lot Gold | $3-$6/lot Forex"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Daily Payouts",
      description: "Automatic processing and daily credits to your account. No manual requests needed.",
      highlight: "Paid within 24 hours"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Premium Trading Signals",
      description: "Professional signals with entry, stop loss, and take profit levels clearly defined.",
      highlight: "Free for ELITE10 users"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Exclusive Community",
      description: "Join thousands of traders in Discord & Telegram with free trading plans and support.",
      highlight: "24/7 active community"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "World-Class Education",
      description: "Access comprehensive courses, webinars, and expert guidance completely free.",
      highlight: "Worth $1000+ value"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Regulated Broker",
      description: "XM is regulated by FCA, CySEC, and ASIC. Your funds are protected and secure.",
      highlight: "Multi-jurisdiction safety"
    }
  ];

  const benefits = [
    "Zero fees to join - completely free",
    "No minimum trading volume required",
    "Rebates on ALL instruments (Forex, Gold, Indices)",
    "Withdraw rebates anytime",
    "24/7 multilingual support",
    "MT4 & MT5 platforms included",
    "Leverage up to 1:1000",
    "Negative balance protection"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm animate-pulse">
              <Zap className="w-4 h-4" />
              UNLIMITED DAILY REBATES - NO CAPS!
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight">
              XM Partner Code<br />ELITE10
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Join MonarchForex and earn <span className="text-yellow-400 font-bold">$5/lot on Gold</span> paid daily. 
              Turn your trading volume into guaranteed passive income!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://affs.click/L6qln" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Open XM Account Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="https://discord.gg/svas97Qf7r" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Join Discord Community
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-blue-300">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                FCA Regulated
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                10M+ Clients
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-green-400" />
                Award-Winning Broker
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rebate Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Daily Rebate Income Calculator
          </h2>
          <p className="text-xl text-blue-200">
            See how much you can earn with ELITE10 unlimited rebates
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {rebateExamples.map((example, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-blue-300">{example.trader}</h3>
                
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Capital:</span>
                    <span className="font-semibold">{example.capital}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Volume:</span>
                    <span className="font-semibold">{example.volume}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Instrument:</span>
                    <span className="font-semibold text-yellow-400">{example.instrument}</span>
                  </div>
                </div>

                <div className="border-t border-blue-500/30 pt-4 mt-4">
                  <div className="text-sm text-gray-400 mb-2">Calculation:</div>
                  <div className="text-lg font-mono text-blue-300 mb-4">{example.calculation}</div>
                  
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Monthly Rebate:</span>
                      <span className="text-2xl font-bold text-green-400">{example.monthly}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Annual Rebate:</span>
                      <span className="text-xl font-bold text-green-300">{example.annual}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-green-500/30">
                      <span className="text-gray-300">ROI from Rebates:</span>
                      <span className="text-xl font-bold text-yellow-400">{example.roi}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
          <p className="text-lg">
            <span className="font-bold text-yellow-400">💡 Pro Tip:</span> These are rebates ONLY. 
            Add your actual trading profits on top for total earnings!
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-800/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose ELITE10?
          </h2>
          <p className="text-xl text-blue-200">
            Exclusive benefits you won't get anywhere else
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="inline-block bg-gradient-to-r from-green-500/20 to-blue-500/20 px-4 py-2 rounded-lg text-sm font-semibold text-green-400">
                {feature.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Checklist */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 border border-blue-500/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Everything Included with ELITE10
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rebate Rate Table */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Rebate Structure
          </h2>
          <p className="text-xl text-blue-200">
            Transparent rates paid daily
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-blue-500/30">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600/20 border-b border-blue-500/30">
                <th className="px-6 py-4 text-left text-lg font-bold">Instrument</th>
                <th className="px-6 py-4 text-right text-lg font-bold">Rebate per Lot</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700/50 hover:bg-blue-500/10 transition-colors">
                <td className="px-6 py-4 text-lg">Gold (XAUUSD)</td>
                <td className="px-6 py-4 text-right text-xl font-bold text-yellow-400">$5.00</td>
              </tr>
              <tr className="hover:bg-blue-500/10 transition-colors">
                <td className="px-6 py-4 text-lg">Forex Pairs (All)</td>
                <td className="px-6 py-4 text-right text-xl font-bold text-green-400">$3.00 - $6.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center text-sm text-gray-400">
          * Rebates paid automatically every 24 hours • No minimum volume • No maximum cap
        </div>
      </div>

      {/* How to Get Started */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started in 3 Easy Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-3xl font-bold mb-4">
              1
            </div>
            <h3 className="text-2xl font-bold">Register</h3>
            <p className="text-gray-300">
              Open your XM account using partner code <span className="font-bold text-yellow-400">ELITE10</span>
            </p>
            <a 
              href="https://affs.click/L6qln" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Register Now
            </a>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full text-3xl font-bold mb-4">
              2
            </div>
            <h3 className="text-2xl font-bold">Join Community</h3>
            <p className="text-gray-300">
              Get free trading plans, signals, and support from professionals
            </p>
            <a 
              href="https://discord.gg/svas97Qf7r" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Join Discord
            </a>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-600 rounded-full text-3xl font-bold mb-4">
              3
            </div>
            <h3 className="text-2xl font-bold">Start Trading</h3>
            <p className="text-gray-300">
              Trade and receive daily rebates automatically in your account
            </p>
            <div className="inline-block bg-green-600 px-6 py-3 rounded-lg font-semibold">
              Earn Daily!
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center space-y-6 shadow-2xl">
          <Gift className="w-16 h-16 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold">
            Start Earning Daily Rebates Today
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Join thousands of traders already earning passive income through ELITE10. 
            Zero fees, unlimited rebates, paid daily!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a 
              href="https://affs.click/L6qln" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-xl shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Open XM Account with ELITE10
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>

          <div className="pt-6 space-y-2">
            <p className="text-sm opacity-90">
              Visit: <a href="https://monarchforex.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-300">MonarchForex.io</a>
            </p>
            <p className="text-sm opacity-90">
              Join Community: <a href="https://discord.gg/svas97Qf7r" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-300">Discord</a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900/50 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400 text-sm space-y-2">
            <p>
              XM Partner Code ELITE10 by MonarchForex
            </p>
            <p className="text-xs">
              Risk Warning: Trading Forex and CFDs involves significant risk. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
