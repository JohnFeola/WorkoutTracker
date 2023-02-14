import { HiLockClosed } from "react-icons/hi";

function UpgradePlan() {
  return (
    <div className="z-50 fixed top-20 sm:top-60 right-1/4 w-1/2 sm:h-[40%]">
      <div className="bg-white rounded-lg p-4 text-center">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl px-1 font-semibold">
            Upgrade Your Membership
          </h2>
        </div>
        <section className="mt-8 space-y-6">
          <form>
            <div className="sm:flex block gap-2 sm:px-8 px-2">
              <input
                type="text"
                placeholder="First Name"
                className="block w-full rounded-md mb-2 border-gray-300 shadow-sm px-3 py-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="block w-full rounded-md appearance-none mb-2 border-gray-300 shadow-sm px-3 py-2"
              />
            </div>

            <div className="gap-2 sm:px-8 px-2">
              <input
                type="text"
                placeholder="Credit Card Number"
                className="block w-full rounded-md mb-2 border-gray-300 shadow-sm px-3 py-2"
              />
              <input
                type="text"
                placeholder="Security Code"
                className="block w-full rounded-md mb-2 border-gray-300 shadow-sm px-3 py-2"
              />
              <input
                type="text"
                placeholder="Card Expiration MM / YY"
                className="block w-full rounded-md mb-2 border-gray-300 shadow-sm px-3 py-2"
              />
            </div>
            <div className="flex items-center sm:px-8 px-2">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-900">
                {" "}
                Remember this card?
              </label>
            </div>
            <div className="sm:px-8 px-2">
              <button className="relative group bg-blue-600 flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 mt-4">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <HiLockClosed className="h-4 w-4 text-blue-500 group-hover:text-white" />
                </span>
                Upgrade Membership
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
export default UpgradePlan;
