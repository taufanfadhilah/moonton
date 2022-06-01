import { Link } from "@inertiajs/inertia-react";

export default function MenuItem({
    link,
    icon,
    text,
    isActive,
    method = "get",
}) {
    return (
        <Link
            href={link ? route(link) : null}
            className={`side-link ${isActive && "active"}`}
            method={method}
            as="button"
        >
            {icon}
            {text}
        </Link>
    );
}
