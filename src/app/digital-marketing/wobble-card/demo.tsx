"use client";
import { WobbleCard } from "./wobble-card";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 bg-pink-600 min-h-[200px]"
        className="relative overflow-hidden"
      >
        <div className="max-w-sm z-10 relative">
          <h2 className="text-3xl font-bold text-white mb-4">
            Gippity AI powers the entire universe
          </h2>
          <p className="text-white/90">
            With over 100,000 monthly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/images/dash.png"
          width={600}
          height={400}
          alt="Dashboard preview"
          className="absolute -right-1/4 bottom-0 w-2/3 object-contain"
        />
      </WobbleCard>

      <WobbleCard
        containerClassName="col-span-1 bg-indigo-600 min-h-[200px]"
        className="relative"
      >
        <div className="max-w-sm">
          <h2 className="text-3xl font-bold text-white mb-4">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="text-white/90">
            If someone yells  goes limp, or taps out, the fight is over.
          </p>
        </div>
      </WobbleCard>

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 bg-indigo-700 min-h-[300px]"
        className="relative overflow-hidden"
      >
        <div className="max-w-lg z-10 relative">
          <h2 className="text-3xl font-bold text-white mb-4">
            Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper today!
          </h2>
          <p className="text-white/90">
            With over 100,000 monthly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/images/dash.png"
          width={600}
          height={400}
          alt="Dashboard preview"
          className="absolute -right-1/4 bottom-0 w-2/3 object-contain"
        />
      </WobbleCard>
    </div>
  );
}