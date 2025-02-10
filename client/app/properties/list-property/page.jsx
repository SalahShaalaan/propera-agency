import Heading from '../../_components/shared/Heading';
import ListForm from './ListForm';

export default function Page() {
  return (
    <div className="min-h-screen bg-mainBlack relative overflow-hidden">
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-mainGold/5 via-transparent to-mainDark/50" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <Heading
          title="Ready To Sell Your Property?"
          titleColor="text-mainGold"
          description="Let us guide you through a seamless selling experience. Complete the form below and our expert team will handle everything from valuation to closing."
          descriptionColor="text-gray-300"
          className="mb-16"
        />

        {/* Form Container */}
        <div className="relative bg-mainDark/80 backdrop-blur-lg rounded-2xl border border-mainGold/30 p-12 shadow-2xl shadow-mainGold/10">
          <div className="space-y-8">
            <ListForm />
            {/* Decorative Elements */}
            <div className="flex items-center gap-4 opacity-50">
              <span className="flex-1 h-px bg-mainGold" />
              <span className="text-mainGold text-lg">★</span>
              <span className="flex-1 h-px bg-mainGold" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 text-center">
          {['20k+ Properties Sold', '98% Client Satisfaction', '₹5000Cr+ Volume'].map((text) => (
            <div key={text} className="p-6 border border-mainGold/20 rounded-xl bg-mainDark/50">
              <h3 className="text-2xl font-semibold text-mainGold mb-2">{text.split(' ')[0]}</h3>
              <p className="text-gray-300 text-sm">{text.split(' ').slice(1).join(' ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}