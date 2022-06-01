export default function SubscriptionDetail({
    name,
    isPremium,
    remainingActiveDays,
    activeDays,
}) {
    const remainingDays = activeDays - remainingActiveDays;
    const loadingProgress = () => {
        const progress = remainingDays / activeDays;
        if (progress < 0.25) {
            return 'w-3/12'
        } else if (progress < 0.5) {
            return "w-6/12";
        } else if (progress < 0.75) {
            return "w-9/12";
        } else {
            return 'w-full'
        }
    }
    return (
        <>
            {/* BASIC */}
            {!isPremium && (
                <div class="mt-auto pr-[30px]">
                    <div class="p-5 bg-white rounded-[25px] outline outline-1 outline-[#f1f1f1]">
                        <div class="text-black text-lg font-semibold mb-8">
                            {name}
                        </div>
                        <div class="text-black text-sm mb-2">
                            {remainingActiveDays} of {activeDays} hari
                        </div>
                        <div class="rounded-full w-full h-[6px] bg-[#f1f1f1]">
                            <div class="rounded-full h-full w-2/12 bg-alerange"></div>
                        </div>
                    </div>
                </div>
            )}

            {/* PREMIUM */}
            {isPremium && (
                <div className="mt-auto pr-[30px]">
                    <div className="p-5 bg-black rounded-[25px]">
                        <img src="/icons/ic_star-rounded.svg" alt="" />
                        <div className="text-white text-lg font-semibold mt-4 mb-8">
                            {name}
                        </div>
                        <div className="text-white text-sm mb-2">
                            {remainingActiveDays} of {activeDays} hari
                        </div>
                        <div className="rounded-full w-full h-[6px] bg-[#333333]">
                            <div
                                className={`rounded-full h-full bg-alerange ${loadingProgress()}`}
                            ></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
