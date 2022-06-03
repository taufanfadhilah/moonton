import { Link } from "@inertiajs/inertia-react";
import PropType from "prop-types";

MovieCard.propType = {
    slug: PropType.string.isRequired,
    name: PropType.string.isRequired,
    category: PropType.string.isRequired,
    thumbnail: PropType.string.isRequired,
};

export default function MovieCard({ slug, name, category, thumbnail }) {
    return (
        <div className="absolute group overflow-hidden mr-[30px]">
            <img
                src={`/storage/${thumbnail}`}
                className="object-cover rounded-[30px] h-[340px] w-[250px]"
                alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px]">
                <div className="px-7 pb-7">
                    <div className="font-medium text-xl text-white">{name}</div>
                    <p className="mb-0 text-gray-300 text-base mt-[10px]">
                        {category}
                    </p>
                </div>
            </div>
            <div
                className="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
                                -translate-x-1/2 z-20 transition ease-in-out duration-500"
            >
                <img src="/icons/ic_play.svg" className="" width="50" alt="" />
            </div>
            <Link
                href={route("user.dashboard.movie.show", slug)}
                className="inset-0 absolute z-50"
            ></Link>
        </div>
    );
}
