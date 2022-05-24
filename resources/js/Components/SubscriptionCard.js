import Button from "@/Components/Button";

export default function SubscriptionCard({
    id,
    name,
    price,
    durationInMonth,
    features,
    isPremium,
    onSelectSubscription,
}) {
    return (
        <>
            {/* Basic */}
            {!isPremium && (
                <div className="flex flex-col gap-[30px] py-[30px] px-7 outline outline-1 outline-[#F1F1F1] rounded-[26px] text-black w-[300px] h-[max-content]">
                    {/* Top Content: Name-Price */}
                    <div>
                        <div className="text-sm mb-2">{name}</div>
                        <div className="text-[28px] font-bold">
                            IDR {price.toLocaleString()}
                        </div>
                        <p className="text-gray-1 text-xs font-light">
                            /{durationInMonth} months
                        </p>
                    </div>

                    {/* Mid Content: Benefits */}
                    <div className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <div
                                className="flex items-center gap-2"
                                key={`${index}-${id}-${features}`}
                            >
                                <img src="/icons/ic_tick.svg" alt="" />
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Bottom: CTA Button */}
                    <div onClick={onSelectSubscription}>
                        <Button type="button" variant="white-outline">
                            <span className="text-base">Start {name}</span>
                        </Button>
                    </div>
                </div>
            )}
            {/* For Greatest */}
            {isPremium && (
                <div className="flex flex-col gap-[30px] py-[30px] px-7 outline outline-1 outline-[#F1F1F1] rounded-[26px] text-white w-[300px] bg-black">
                    {/* Ornament Icon */}
                    <div className="bg-alerange rounded-full p-[13px] max-w-max">
                        <img src="/icons/ic_star.svg" width="24" alt="" />
                    </div>
                    {/* Top Content: Name-Price */}
                    <div>
                        <div className="text-sm mb-2">{name}</div>
                        <div className="text-[28px] font-bold">
                            IDR {price.toLocaleString()}
                        </div>
                        <p className="text-[#767676] text-xs font-light">
                            /{durationInMonth} months
                        </p>
                    </div>

                    {/* Mid Content: Benefits */}
                    <div className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <div
                                className="flex items-center gap-2"
                                key={`${index}-${id}-${feature}`}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Bottom: CTA Button */}
                    <div onClick={onSelectSubscription}>
                        <Button type="button">
                            <span className="text-base font-semibold">
                                Subscribe Now
                            </span>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}
