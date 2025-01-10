import { useState } from 'react';
import { Check } from 'lucide-react';

interface PlansProps {
  currentLang: string;
}

export function Plans({ currentLang }: PlansProps) {
  const [billingType, setBillingType] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Plan Básico',
      price: 500,
      monthlyFee: billingType === 'monthly' ? 25 : 20,
      discount: 20,
      features: [
        'Mantenimiento básico',
        'Cambios: 200$ por cambio',
      ],
    },
    {
      name: 'Plan Profesional',
      price: 500,
      monthlyFee: billingType === 'monthly' ? 40 : 34,
      discount: 15,
      features: [
        '3 cambios al año incluidos',
        'Mantenimiento avanzado',
      ],
    },
    {
      name: 'Plan Premium',
      price: 675,
      monthlyFee: billingType === 'monthly' ? 50 : 40,
      discount: 20,
      features: [
        'Asistencia web IA',
        '4 cambios mensuales incluidos',
        'Mantenimiento premium',
      ],
    },
  ];

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/50 rounded-lg p-1 mb-8">
            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                billingType === 'monthly'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
              onClick={() => setBillingType('monthly')}
            >
              Pago Mensual
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                billingType === 'annual'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
              onClick={() => setBillingType('annual')}
            >
              Pago Anual
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl p-8 flex flex-col relative"
            >
              {billingType === 'annual' && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                  -{plan.discount}%
                </div>
              )}
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                {plan.name}
              </h3>
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-white mb-2">
                  ${plan.price}
                </div>
                <div className="text-xl text-slate-300">
                  {billingType === 'annual' ? (
                    <>
                      <span className="line-through text-slate-500">
                        +${plan.monthlyFee + (plan.monthlyFee * plan.discount / 100)}/mes
                      </span>{' '}
                      <span className="text-indigo-400">+${plan.monthlyFee}/mes</span>
                    </>
                  ) : (
                    <>+${plan.monthlyFee}/mes</>
                  )}
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-300">
                    <Check className="w-5 h-5 text-indigo-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Contratar Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
